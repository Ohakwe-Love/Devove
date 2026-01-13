// assets/js/contact.js - Handle contact form submission with AJAX

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) {
        console.warn('Contact form not found on this page');
        return;
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <span style="display: inline-flex; align-items: center; gap: 8px;">
                <svg style="animation: spin 1s linear infinite; width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path style="opacity: 0.75;" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
            </span>
        `;
        
        // Get form data
        const formData = new FormData(this);
        
        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Success message
                showNotification('success', result.message);
                contactForm.reset();
                
                // Scroll to notification
                setTimeout(() => {
                    const notification = document.querySelector('.contact-notification');
                    if (notification) {
                        notification.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            } else {
                // Error message
                const errorMessage = result.data?.errors 
                    ? result.data.errors.join('<br>') 
                    : result.message;
                showNotification('error', errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('error', 'An unexpected error occurred. Please try again or contact me directly.');
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
    
    // Show notification function
    function showNotification(type, message) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.contact-notification');
        existingNotifications.forEach(notif => notif.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `contact-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">
                    ${type === 'success' ? `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    ` : `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                    `}
                </div>
                <div class="notification-message">${message}</div>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
            </div>
        `;
        
        // Insert before form
        contactForm.parentNode.insertBefore(notification, contactForm);
        
        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Auto remove after 8 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 8000);
    }
});

// Add CSS styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .contact-notification {
        padding: 0;
        border-radius: 8px;
        margin-bottom: 25px;
        font-size: 14px;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        overflow: hidden;
    }
    
    .contact-notification.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .contact-notification .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 18px 20px;
    }
    
    .contact-notification .notification-icon {
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .contact-notification .notification-icon svg {
        width: 100%;
        height: 100%;
    }
    
    .contact-notification .notification-message {
        flex: 1;
        line-height: 1.5;
    }
    
    .contact-notification .notification-close {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .contact-notification .notification-close:hover {
        opacity: 1;
    }
    
    .contact-notification .notification-close svg {
        width: 20px;
        height: 20px;
    }
    
    .contact-notification.success {
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
        border: 1px solid rgba(34, 197, 94, 0.3);
        color: rgb(34, 197, 94);
    }
    
    .contact-notification.error {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
        border: 1px solid rgba(239, 68, 68, 0.3);
        color: rgb(239, 68, 68);
    }
    
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
        .contact-notification {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .contact-notification.success {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
        }
        
        .contact-notification.error {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
        }
    }
    
    /* Mobile responsiveness */
    @media screen and (max-width: 600px) {
        .contact-notification .notification-content {
            padding: 15px;
            gap: 12px;
        }
        
        .contact-notification .notification-icon {
            width: 24px;
            height: 24px;
        }
        
        .contact-notification {
            font-size: 13px;
        }
    }
`;
document.head.appendChild(style);