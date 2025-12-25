// Project detail modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Project data with base64 encoded placeholder images
    const projectsData = {
        library: {
            title: "Library Management System",
            description: "Complete library management solution with book tracking and user management. This system allows librarians to efficiently manage books, track borrowings, and maintain user records.",
            tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
            features: [
                "Book catalog management",
                "User registration and login",
                "Issue and return tracking",
                "Fine calculation system",
                "Search and filter functionality",
                "Admin dashboard"
            ],
            benefits: [
                "Reduces manual work for librarians",
                "Real-time tracking of book availability",
                "Automated fine calculation",
                "Easy search and access to books",
                "Secure user authentication"
            ],
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%234361ee'/%3E%3Crect x='50' y='40' width='300' height='120' rx='8' fill='white'/%3E%3Crect x='70' y='60' width='260' height='20' fill='%23e9ecef'/%3E%3Crect x='70' y='90' width='260' height='20' fill='%23e9ecef'/%3E%3Crect x='70' y='120' width='260' height='20' fill='%23e9ecef'/%3E%3Crect x='70' y='150' width='100' height='20' fill='%23e9ecef'/%3E%3Crect x='230' y='150' width='100' height='20' fill='%234ade80'/%3E%3Ccircle cx='20' cy='20' r='15' fill='white'/%3E%3Ccircle cx='20' cy='60' r='15' fill='white'/%3E%3Ccircle cx='20' cy='100' r='15' fill='white'/%3E%3C/svg%3E"
        },
        ecommerce: {
            title: "Online Shopping Platform",
            description: "E-commerce website with payment integration and inventory management. A complete solution for online retail businesses with user-friendly interface.",
            tags: ["React", "Node.js", "MongoDB", "Stripe API"],
            features: [
                "Product catalog with categories",
                "Shopping cart functionality",
                "Secure payment processing",
                "User account management",
                "Order tracking system",
                "Inventory management dashboard"
            ],
            benefits: [
                "24/7 online availability",
                "Easy product browsing and search",
                "Secure payment options",
                "Real-time inventory tracking",
                "Order management system"
            ],
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%237c3aed'/%3E%3Crect x='50' y='30' width='300' height='140' rx='8' fill='white'/%3E%3Crect x='70' y='50' width='100' height='15' fill='%23e9ecef'/%3E%3Crect x='220' y='50' width='100' height='15' fill='%23e9ecef'/%3E%3Crect x='70' y='80' width='80' height='80' fill='%23e9ecef'/%3E%3Crect x='170' y='80' width='80' height='80' fill='%23e9ecef'/%3E%3Crect x='270' y='80' width='80' height='80' fill='%23e9ecef'/%3E%3Ccircle cx='350' cy='20' r='15' fill='%23f87171'/%3E%3C/svg%3E"
        },
        hospital: {
            title: "Hospital Management System",
            description: "Complete hospital management system with patient records and appointments. Streamlines hospital operations and improves patient care.",
            tags: ["Python", "Django", "PostgreSQL", "Bootstrap"],
            features: [
                "Patient registration and records",
                "Doctor scheduling system",
                "Appointment booking",
                "Medical history tracking",
                "Billing and payment processing",
                "Staff management"
            ],
            benefits: [
                "Centralized patient information",
                "Efficient appointment scheduling",
                "Reduced paperwork",
                "Improved patient care",
                "Better resource management"
            ],
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%230d9488'/%3E%3Crect x='50' y='30' width='300' height='140' rx='8' fill='white'/%3E%3Crect x='70' y='50' width='260' height='20' fill='%23e9ecef'/%3E%3Crect x='70' y='80' width='260' height='20' fill='%23e9ecef'/%3E%3Crect x='70' y='110' width='260' height='20' fill='%23e9ecef'/%3E%3Crect x='70' y='140' width='100' height='20' fill='%23e9ecef'/%3E%3Crect x='230' y='140' width='100' height='20' fill='%234ade80'/%3E%3Ccircle cx='20' cy='20' r='15' fill='white'/%3E%3Ccircle cx='20' cy='60' r='15' fill='white'/%3E%3Ccircle cx='20' cy='100' r='15' fill='white'/%3E%3Ccircle cx='20' cy='140' r='15' fill='white'/%3E%3C/svg%3E"
        },
        chatbot: {
            title: "AI-Powered Chatbot",
            description: "Intelligent chatbot for customer support and query resolution. Uses natural language processing to understand and respond to user queries.",
            tags: ["Python", "NLP", "TensorFlow", "Flask"],
            features: [
                "Natural language understanding",
                "Context-aware responses",
                "Multi-platform integration",
                "Learning and improvement capabilities",
                "Admin analytics dashboard",
                "Customizable conversation flows"
            ],
            benefits: [
                "24/7 customer support",
                "Reduced response time",
                "Scalable support solution",
                "Cost-effective automation",
                "Continuous learning and improvement"
            ],
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23d946ef'/%3E%3Crect x='50' y='30' width='300' height='140' rx='8' fill='white'/%3E%3Ccircle cx='200' cy='70' r='30' fill='%23e9ecef'/%3E%3Crect x='150' y='110' width='100' height='15' rx='8' fill='%23e9ecef'/%3E%3Crect x='120' y='135' width='160' height='15' rx='8' fill='%23e9ecef'/%3E%3Crect x='170' y='160' width='60' height='15' rx='8' fill='%234ade80'/%3E%3Ccircle cx='20' cy='20' r='15' fill='white'/%3E%3Ccircle cx='20' cy='60' r='15' fill='white'/%3E%3Ccircle cx='20' cy='100' r='15' fill='white'/%3E%3Ccircle cx='20' cy='140' r='15' fill='white'/%3E%3C/svg%3E"
        },
        attendance: {
            title: "Smart Attendance System",
            description: "Biometric-based attendance system with real-time tracking. Modern solution for accurate and tamper-proof attendance management.",
            tags: ["Java", "Spring Boot", "MySQL", "Biometric API"],
            features: [
                "Biometric fingerprint scanning",
                "Real-time attendance tracking",
                "Automated report generation",
                "Leave management system",
                "Integration with payroll",
                "Mobile app for remote tracking"
            ],
            benefits: [
                "Eliminates proxy attendance",
                "Real-time monitoring",
                "Automated reporting",
                "Integration with HR systems",
                "Secure and tamper-proof"
            ],
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f97316'/%3E%3Crect x='50' y='30' width='300' height='140' rx='8' fill='white'/%3E%3Ccircle cx='200' cy='80' r='40' fill='%23e9ecef'/%3E%3Crect x='150' y='130' width='100' height='20' fill='%234ade80'/%3E%3Ccircle cx='20' cy='20' r='15' fill='white'/%3E%3Ccircle cx='20' cy='60' r='15' fill='white'/%3E%3Ccircle cx='20' cy='100' r='15' fill='white'/%3E%3Ccircle cx='20' cy='140' r='15' fill='white'/%3E%3C/svg%3E"
        },
        portal: {
            title: "Student Information Portal",
            description: "Academic portal for students, teachers, and administrators. Centralized platform for academic information and communication.",
            tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
            features: [
                "Student and teacher profiles",
                "Grade and result management",
                "Timetable and schedule",
                "Assignment submission",
                "Communication tools",
                "Attendance tracking"
            ],
            benefits: [
                "Centralized academic information",
                "Improved communication",
                "Easy access to grades",
                "Streamlined administrative tasks",
                "Enhanced parent-teacher interaction"
            ],
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23059669'/%3E%3Crect x='50' y='30' width='300' height='140' rx='8' fill='white'/%3E%3Crect x='70' y='50' width='260' height='15' fill='%23e9ecef'/%3E%3Crect x='70' y='75' width='260' height='15' fill='%23e9ecef'/%3E%3Crect x='70' y='100' width='260' height='15' fill='%23e9ecef'/%3E%3Crect x='70' y='125' width='100' height='15' fill='%23e9ecef'/%3E%3Crect x='230' y='125' width='100' height='15' fill='%234ade80'/%3E%3Ccircle cx='20' cy='20' r='15' fill='white'/%3E%3Ccircle cx='20' cy='60' r='15' fill='white'/%3E%3Ccircle cx='20' cy='100' r='15' fill='white'/%3E%3Ccircle cx='20' cy='140' r='15' fill='white'/%3E%3C/svg%3E"
        }
    };

    // Get modal elements
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalBenefits = document.getElementById('modalBenefits');
    const closeModal = document.querySelector('.close');

    // Add click event to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                // Update modal content
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                
                // Update image
                modalImage.style.backgroundImage = `url("${project.image}")`;
                modalImage.style.backgroundColor = 'transparent';
                modalImage.textContent = ''; // Clear any text content
                
                // Update tags
                modalTags.innerHTML = '';
                project.tags.forEach(tag => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'tag';
                    tagSpan.textContent = tag;
                    modalTags.appendChild(tagSpan);
                });
                
                // Update features
                modalFeatures.innerHTML = '';
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeatures.appendChild(li);
                });
                
                // Update benefits
                modalBenefits.innerHTML = '';
                project.benefits.forEach(benefit => {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    modalBenefits.appendChild(li);
                });
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when close button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling again
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling again
        }
    });

    // Form submission handler for sending data to backend
    const contactForm = document.getElementById('websiteForm');
    
    if (contactForm) {
        // Override the existing form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            
            // Convert FormData to regular object
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send data to backend
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Create a styled success message
                    const successMessage = `
🎉 Thank You! 🎉

Your request has been received successfully!

📧 Email: studentwebsitesolutions@gmail.com
📱 Phone: +91 93093 12505
⏱️ Response Time: Within 24 hours

We'll contact you soon to discuss your website project!`;
                    alert(successMessage);
                    contactForm.reset();
                    
                    // Reset form validation classes
                    const formGroups = document.querySelectorAll('.form-group');
                    formGroups.forEach(group => {
                        group.classList.remove('error', 'success');
                    });
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while sending your request. Please try again.');
            })
            .finally(() => {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }

    // Chatbot functionality
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendChatbotMessage = document.getElementById('sendChatbotMessage');

    // Toggle chatbot modal
    chatbotButton.addEventListener('click', function() {
        chatbotModal.style.display = 'flex';
        // Add a welcome message if it's the first time opening
        if (chatbotMessages.children.length === 1) {
            setTimeout(() => {
                addMessage("Hello! I'm your Student Website Assistant. How can I help you today?", 'bot');
            }, 300);
        }
    });

    // Close chatbot modal
    closeChatbot.addEventListener('click', function() {
        chatbotModal.style.display = 'none';
    });

    // Close chatbot when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === chatbotModal) {
            chatbotModal.style.display = 'none';
        }
    });

    // Send message when clicking send button
    sendChatbotMessage.addEventListener('click', function() {
        sendMessage();
    });

    // Send message when pressing Enter
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            // Add user message to chat
            addMessage(message, 'user');
            chatbotInput.value = '';

            // Show typing indicator
            showTypingIndicator();
            
            // Simulate bot response after a short delay
            setTimeout(() => {
                // Remove typing indicator
                removeTypingIndicator();
                const response = generateBotResponse(message);
                addMessage(response, 'bot');
            }, 1000);
        }
    }

    // Function to show typing indicator
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typingIndicator';
        typingIndicator.classList.add('message', 'bot-message');
        typingIndicator.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatbotMessages.appendChild(typingIndicator);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Function to add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        
        const messageP = document.createElement('p');
        messageP.textContent = text;
        messageDiv.appendChild(messageP);
        
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom of chat
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to generate bot response based on user input
    function generateBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
            return "Hello! 👋 Welcome to Student Website Solutions. How can I assist you with your website project today?";
        } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('package')) {
            return "We offer three amazing packages:\n\n📚 Basic Portfolio: ₹1,500\n💻 Project Website: ₹3,000 (Most Popular!)\n🚀 Premium Package: ₹5,000\n\nWould you like details about any specific package?";
        } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('phone') || lowerCaseMessage.includes('email')) {
            return "You can reach us at 📧 studentwebsitesolutions@gmail.com or 📱 +91 93093 12505. We're available Mon-Fri from 9AM to 8PM. What's your specific question?";
        } else if (lowerCaseMessage.includes('project') || lowerCaseMessage.includes('portfolio')) {
            return "We specialize in creating professional websites for diploma students! Our popular projects include:\n\n📚 Library Management\n🛒 E-commerce Platform\n🏥 Hospital Management\n🤖 AI Chatbot\n📋 Attendance System\n🎓 Student Portal\n\nWhich type interests you most? 💡";
        } else if (lowerCaseMessage.includes('time') || lowerCaseMessage.includes('delivery') || lowerCaseMessage.includes('deadline')) {
            return "We're fast! 🚀\n\n⏱️ Basic packages: 5-7 days\n⚙️ Complex projects: 10-15 days\n⚡ Rush delivery: Available for an additional fee\n\nNeed it sooner? Just ask! 😊";
        } else if (lowerCaseMessage.includes('thank')) {
            return "You're welcome! 😊 Is there anything else I can help you with today?";
        } else if (lowerCaseMessage.includes('help')) {
            return "I'm here to help! 🤝 I can provide info about:\n\n💰 Pricing & Packages\n💻 Project Examples\n📞 Contact Information\n⏱️ Delivery Timeframes\n\nWhat would you like to know? 🤔";
        } else if (lowerCaseMessage.includes('name')) {
            return "I'm your Student Website Assistant! 🤖 I'm here to help you with any questions about our web design services for diploma students. How can I assist you today?";
        } else if (lowerCaseMessage.includes('student')) {
            return "Perfect! 🎓 We specialize in websites for diploma students like you. Whether it's a project portfolio, academic presentation, or final year project - we've got you covered! What kind of student project do you need?";
        } else if (lowerCaseMessage.includes('portfolio')) {
            return "A portfolio website is a great choice! 🎨 It's perfect for showcasing your projects, skills, and achievements. We can create a stunning portfolio that highlights your work beautifully. Would you like to know more about our portfolio packages?";
        } else if (lowerCaseMessage.includes('website') || lowerCaseMessage.includes('web')) {
            return "We create amazing websites! 🌐 From simple portfolios to complex web applications, we handle it all. Our websites are:\n\n📱 Fully responsive (mobile-friendly)\n⚡ Fast loading\n🎨 Beautifully designed\n🔒 Secure & reliable\n\nWhat type of website are you looking for?";
        } else {
            return "Thank you for your query! 🙏 For more specific information about your project requirements, please fill out our contact form or call us at +91 93093 12505. Our team will assist you shortly. How else can I help you today?";
        }
    }
});