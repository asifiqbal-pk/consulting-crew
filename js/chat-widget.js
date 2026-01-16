// Live Chat Widget
class LiveChat {
    constructor() {
        this.chatWidget = document.getElementById('chatWidget');
        this.openChatBtn = document.getElementById('openChat');
        this.closeChatBtn = document.getElementById('closeChat');
        this.sendChatBtn = document.getElementById('sendChat');
        this.chatInput = document.getElementById('chatInput');
        this.chatMessages = document.querySelector('.chat-messages');
        
        this.isOpen = false;
        this.messages = [];
        
        this.init();
    }
    
    init() {
        this.openChatBtn?.addEventListener('click', () => this.toggleChat());
        this.closeChatBtn?.addEventListener('click', () => this.closeChat());
        this.sendChatBtn?.addEventListener('click', () => this.sendMessage());
        
        this.chatInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Add sample bot messages
        this.addBotMessage("Hello! I'm your virtual assistant. How can I help you today?");
        this.addBotMessage("You can ask me about our services, pricing, or schedule a consultation.");
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.openChat();
        } else {
            this.closeChat();
        }
    }
    
    openChat() {
        this.chatWidget?.classList.add('active');
        this.openChatBtn.innerHTML = '<i class="fas fa-times"></i>';
        this.chatInput?.focus();
    }
    
    closeChat() {
        this.chatWidget?.classList.remove('active');
        this.openChatBtn.innerHTML = '<i class="fas fa-comment"></i>';
        this.isOpen = false;
    }
    
    addMessage(text, isBot = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isBot ? 'bot' : 'user'}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        
        this.chatMessages?.appendChild(messageDiv);
        this.chatMessages?.scrollTop = this.chatMessages.scrollHeight;
    }
    
    addBotMessage(text) {
        this.addMessage(text, true);
    }
    
    sendMessage() {
        const message = this.chatInput?.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, false);
        this.chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            this.handleBotResponse(message.toLowerCase());
        }, 1000);
    }
    
    handleBotResponse(userMessage) {
        let response;
        
        if (userMessage.includes('service') || userMessage.includes('offer')) {
            response = "We offer Data Analysis, Web Development, Web Hosting, Branding, Digital Marketing, and HR Services. Which one are you interested in?";
        } else if (userMessage.includes('price') || userMessage.includes('cost')) {
            response = "Our pricing varies based on project scope. Would you like to schedule a free consultation to discuss your specific needs?";
        } else if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('phone')) {
            response = "You can reach us at info@consultingcrew.com or call +1 (555) 123-4567. Our team is available Monday-Friday, 9AM-6PM.";
        } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
            response = "Hello! How can I assist you today?";
        } else {
            response = "Thank you for your message. A team member will get back to you shortly. In the meantime, feel free to browse our services or contact us directly.";
        }
        
        this.addBotMessage(response);
    }
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LiveChat();
});