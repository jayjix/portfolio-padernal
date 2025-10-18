
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');


        document.querySelector('.nav-menu').classList.remove('active');
    });
});


document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}


window.addEventListener('load', () => {
    const nameElement = document.querySelector('.typed-name');
    const titleElement = document.querySelector('.typed-title');
    

    typeWriter(nameElement, 'E-J T. Padernal', 150, () => {
        setTimeout(() => {
            typeWriter(titleElement, 'Aspiring Software Engineer', 100);
        }, 500);
    });
});


const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};


const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillCard = entry.target;
            const percent = skillCard.getAttribute('data-skill');
            const progressCircle = skillCard.querySelector('.skill-progress');
            const percentElement = skillCard.querySelector('.skill-percent');
            const circumference = 2 * Math.PI * 70;
            const offset = circumference - (percent / 100) * circumference;
            

            requestAnimationFrame(() => {
                setTimeout(() => {
                    progressCircle.style.strokeDashoffset = offset;
                    

                    let currentPercent = 0;
                    const duration = 1500;
                    const increment = percent / (duration / 16);
                    
                    const counter = setInterval(() => {
                        currentPercent += increment;
                        if (currentPercent >= percent) {
                            currentPercent = percent;
                            clearInterval(counter);
                        }
                        percentElement.textContent = Math.round(currentPercent) + '%';
                    }, 16);
                }, 100);
            });
            
            skillObserver.unobserve(skillCard);
        }
    });
}, observerOptions);


document.querySelectorAll('.skill-card').forEach(card => {
    skillObserver.observe(card);
});

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const project = entry.target;
            
            if (project.classList.contains('project-left')) {
                project.classList.add('fade-in-left');
            } else {
                project.classList.add('fade-in-right');
            }
            
            projectObserver.unobserve(project);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-item').forEach(project => {
    projectObserver.observe(project);
});


const exploreBtn = document.getElementById('exploreBtn');
const hiddenProjects = document.querySelectorAll('.hidden-project');
let isExpanded = false;

exploreBtn.addEventListener('click', function() {
    isExpanded = !isExpanded;
    
    if (isExpanded) {
    
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.style.display = 'flex';
                setTimeout(() => {
                    if (project.classList.contains('project-left')) {
                        project.classList.add('fade-in-left');
                    } else {
                        project.classList.add('fade-in-right');
                    }
                }, 50);
            }, index * 200);
        });
        
        
        this.classList.add('expanded');
        this.querySelector('span:first-child').textContent = 'SHOW LESS';
        
    } else {
        
        hiddenProjects.forEach(project => {
            project.style.display = 'none';
            project.classList.remove('fade-in-left', 'fade-in-right');
        });
        
        
        this.classList.remove('expanded');
        this.querySelector('span:first-child').textContent = 'EXPLORE MORE';
        
        
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});


const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    formMessage.textContent = "Message sent! I'll get back to you later.";
    formMessage.classList.add('show');
    
    
    contactForm.reset();
    
    
    setTimeout(() => {
        formMessage.classList.remove('show');
    }, 5000);
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});


const cards = document.querySelectorAll('.hobby-card, .info-card, .tool-card, .contact-item');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});


const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const header = entry.target;
            const accentLine = header.querySelector('.accent-line');
            
            if (accentLine) {
                accentLine.style.animation = 'expandLine 1.5s ease-out';
            }
            
            headerObserver.unobserve(header);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-header').forEach(header => {
    headerObserver.observe(header);
});


window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});


document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

console.log('Portfolio loaded successfully! 🚀');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
    
            if (entry.target.classList.contains('fade-in-up-stagger')) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            } else {
                entry.target.classList.add('animate');
            }
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15, 
    rootMargin: '0px 0px -50px 0px' 
});


document.querySelectorAll('.fade-in-up, .fade-in-up-stagger').forEach(element => {
    fadeInObserver.observe(element);
});


const cardData = {
    hiking: {
        title: "Hiking",
        icon: "img/mt2.png",
        description: "Exploring mountains and nature has been one of my greatest passions. Every trail brings new challenges and breathtaking views. From steep climbs to peaceful forest walks, hiking keeps me connected with nature and helps me stay physically and mentally strong.",
        images: [
            "img/hiking1.jpg",
            "img/hiking2.jpg",
            "img/hiking3.jpg",
            "img/hiking4.jpg",
            "img/hiking5.jpg",
            "img/hiking6.jpg",
        ]
    },
    gaming: {
        title: "Gaming",
        icon: "img/controller.png",
        description: "Gaming is where I unwind and challenge myself. Call of Duty Mobile and other games help me develop strategic thinking, quick reflexes, and teamwork. It's not just entertainment—it's a way to connect with friends and improve my problem-solving skills.",
        images: [
            "img/gaming1.jpg",
            "img/gaming2.jpg",
            "img/gaming3.jpg"
        ]
    },
    workout: {
        title: "Working Out",
        icon: "img/dumbell.png",
        description: "Fitness is a crucial part of my daily routine. Whether it's strength training, cardio, or bodyweight exercises, working out keeps me energized and focused. It teaches me discipline, perseverance, and the importance of setting and achieving goals.",
        images: [
            "img/workout1.jpg",
            "img/workout2.jpg",
            "img/workout3.jpg",
            "img/workout4.jpg",
            "img/workout5.jpg",
            "img/workout6.jpg",
            "img/workout7.jpg",
            "img/workout8.jpg",
            "img/workout9.jpg"
        ]
    },
    citywalking: {
        title: "City Walking",
        icon: "img/urban.png",
        description: "Walking through streets, observing architecture, and experiencing local culture gives me fresh perspectives and inspiration for my creative work.",
        images: [
            "img/city1.jpg",
            "img/city2.jpg",
            "img/city3.jpg",
            "img/city4.jpg",
            "img/city5.jpg",
            "img/city6.jpg",
            "img/city7.jpg",
        ]
    },
    singing: {
        title: "Singing",
        icon: "img/mic.png",
        description: "Music and singing are my creative outlets. Whether it's karaoke with friends or practicing at home, singing helps me express emotions and connect with others through the universal language of music.",
        images: [
            "img/singing1.jpg",
            "img/singing2.jpg",
            "img/singing3.jpg",
        ]
    },
    jogging: {
        title: "Jogging",
        icon: "img/jogging.png",
        description: "Jogging is my go-to for cardio and mental clarity. Early morning runs clear my mind, boost my energy, and prepare me for the day ahead. It's a simple yet powerful way to maintain both physical and mental health.",
        images: [
            "img/jogging1.jpg",
            "img/jogging2.jpg",
            "img/jogging3.jpg",
            "img/jogging4.jpg",
            "img/jogging5.jpg",
            "img/jogging6.jpg",
            "img/jogging7.jpg"

        ]
    },
    education: {
        title: "Education",
        icon: "img/gra.png",
        description: "Currently pursuing BSIT at STII, where I'm building a strong foundation in information technology, programming, and software development. My education journey is shaping my future as a software engineer.",
        images: [
            "img/education1.jpg",
            "img/education2.jpg"
        ]
    },
    location: {
        title: "Location",
        icon: "img/loc.png",
        description: "Based in Ipil, Zamboanga Sibugay—a beautiful place surrounded by mountains and nature. This location offers the perfect balance between peaceful living and access to outdoor adventures.",
        images: [
            "img/location1.jpg",
            "img/location2.jpg"
        ]
    },
    interests: {
        title: "Interests",
        icon: "img/vecteezy_white-heart-clipart_59493081.png",
        description: "My diverse interests include gaming for strategy and fun, fitness for health and discipline, and hiking for adventure and connection with nature. These interests shape who I am and keep me motivated every day.",
        images: [
            "img/hiking6.jpg",
            "img/gaming2.jpg",
            "img/workout1.jpg"
        ]
    }
};


function openModal(cardType) {
    const data = cardData[cardType];
    if (!data) return;

    const modal = document.getElementById('cardModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalGallery = document.getElementById('modalGallery');

    
    modalIcon.src = data.icon;
    modalIcon.alt = data.title;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    
    modalGallery.innerHTML = '';
    
    
    if (data.images.length === 2) {
        modalGallery.classList.add('two-columns');
    } else {
        modalGallery.classList.remove('two-columns');
    }

    data.images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${data.title} ${index + 1}`;
        img.className = 'modal-image';
        modalGallery.appendChild(img);
    });

    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}


function closeModal() {
    const modal = document.getElementById('cardModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; 
}


document.getElementById('cardModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});


document.querySelectorAll('.hobby-card').forEach((card, index) => {
    const hobbies = ['hiking', 'gaming', 'workout', 'citywalking', 'singing', 'jogging'];
    card.addEventListener('click', function() {
        openModal(hobbies[index]);
    });
});


document.querySelectorAll('.info-card').forEach((card, index) => {
    const infos = ['education', 'location', 'interests'];
    card.addEventListener('click', function() {
        openModal(infos[index]);
    });
});