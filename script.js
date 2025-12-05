        // Page navigation
        function showPage(pageName) {
            const pages = document.querySelectorAll('.page-content');
            const navLinks = document.querySelectorAll('.nav-link');
            
            pages.forEach(page => page.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));
            
            document.getElementById(pageName + 'Page').classList.add('active');
            
            const activeLink = Array.from(navLinks).find(link => 
                link.textContent.toLowerCase().includes(pageName.toLowerCase()) || 
                (pageName === 'home' && link.textContent === 'Home')
            );
            if (activeLink) activeLink.classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Close mobile menu
            const mainNav = document.getElementById('mainNav');
            const navToggle = document.querySelector('.nav-toggle');
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }

        // Mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        const mainNav = document.getElementById('mainNav');
        
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navToggle.innerHTML = mainNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Simple image slider
        document.addEventListener('DOMContentLoaded', function() {
            // Slider
            const images = document.querySelectorAll('.slider-image');
            const dotsContainer = document.getElementById('sliderDots');
            let currentIndex = 0;
            
            if (images.length > 0 && dotsContainer) {
                images.forEach((_, index) => {
                    const dot = document.createElement('span');
                    dot.classList.add('dot');
                    if (index === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => showSlide(index));
                    dotsContainer.appendChild(dot);
                });
                
                const dots = document.querySelectorAll('.dot');
                
                function showSlide(index) {
                    images.forEach(img => img.classList.remove('active'));
                    dots.forEach(dot => dot.classList.remove('active'));
                    
                    images[index].classList.add('active');
                    dots[index].classList.add('active');
                    currentIndex = index;
                }
                
                setInterval(() => {
                    currentIndex = (currentIndex + 1) % images.length;
                    showSlide(currentIndex);
                }, 4000);
            }
            
            // Events
            const eventsGrid = document.getElementById('eventsGrid');
            if (eventsGrid) {
                const events = [
                    {title: "Sunday Worship", date: "Every Sunday", time: "8:00 AM & 10:30 AM", desc: "Join us for powerful worship and teaching.", image: "https://raw.githubusercontent.com/AdieleSolomon/Throne-Of-Grace/main/assets/throne-of-grace-media/1(4).jpg"},
                    {title: "Bible Study", date: "Every Wednesday", time: "6:30 PM", desc: "Midweek study and fellowship.", image: "https://raw.githubusercontent.com/AdieleSolomon/Throne-Of-Grace/main/assets/throne-of-grace-media/priest-stands-church-holding-open-260nw-2531745679.jpg"},
                    {title: "Youth Night", date: "Every Friday", time: "7:00 PM", desc: "Dynamic youth service for ages 13-25.", image: "https://raw.githubusercontent.com/AdieleSolomon/Throne-Of-Grace/main/assets/throne-of-grace-media/1(1).jpg"},
                    {title: "Men's Breakfast", date: "First Saturday", time: "8:00 AM", desc: "Monthly gathering for men.", image: "https://raw.githubusercontent.com/AdieleSolomon/Throne-Of-Grace/main/assets/throne-of-grace-media/churchservice4(1).png"},
                    {title: "Women's Conference", date: "March 21-23, 2025", time: "9:00 AM Daily", desc: "Annual women's conference.", image: "https://raw.githubusercontent.com/AdieleSolomon/Throne-Of-Grace/main/assets/throne-of-grace-media/1(6).jpg"},
                    {title: "Family Picnic", date: "April 12, 2025", time: "12:00 PM", desc: "Church picnic with food and games.", image: "https://raw.githubusercontent.com/AdieleSolomon/Throne-Of-Grace/main/assets/throne-of-grace-media/1(3)(1).jpg"}
                ];
                
                events.forEach(event => {
                    const card = document.createElement('div');
                    card.className = 'event-card';
                    card.innerHTML = `
                        <img src="${event.image}" alt="${event.title}" class="event-image">
                        <div class="event-content">
                            <div class="event-date">${event.date} • ${event.time}</div>
                            <h3 class="event-title">${event.title}</h3>
                            <p class="event-description">${event.desc}</p>
                            <a href="#" class="event-link">Learn More →</a>
                        </div>
                    `;
                    eventsGrid.appendChild(card);
                });
            }

            // Locations
            const locationsGrid = document.getElementById('locationsGrid');
            if (locationsGrid) {
                const locations = [
                    {
                        name: "Lagos Central",
                        address: "123 Grace Street, Victoria Island, Lagos",
                        time: "Sunday 8:00 AM & 10:30 AM",
                        phone: "+234 803 123 4567",
                        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        name: "Abuja Grace Center",
                        address: "45 Kingdom Avenue, Wuse 2, Abuja",
                        time: "Sunday 9:00 AM & 11:30 AM",
                        phone: "+234 803 234 5678",
                        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        name: "Port Harcourt",
                        address: "78 Trans Amadi Road, Port Harcourt",
                        time: "Sunday 8:30 AM & 11:00 AM",
                        phone: "+234 803 345 6789",
                        image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        name: "London Expression",
                        address: "25 Westminster Road, London SE1 7PB",
                        time: "Sunday 10:00 AM & 2:00 PM",
                        phone: "+44 20 7123 4567",
                        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        name: "New York Campus",
                        address: "150 Broadway, New York, NY 10038",
                        time: "Sunday 9:30 AM & 12:00 PM",
                        phone: "+1 212 555 1234",
                        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        name: "Toronto Branch",
                        address: "88 Queen Street West, Toronto, ON M5H 2N6",
                        time: "Sunday 10:00 AM & 1:00 PM",
                        phone: "+1 416 555 6789",
                        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }
                ];

                locations.forEach(loc => {
                    const card = document.createElement('div');
                    card.className = 'location-card';
                    card.innerHTML = `
                        <img src="${loc.image}" alt="${loc.name}" class="location-image">
                        <div class="location-info">
                            <h3 class="location-name">${loc.name}</h3>
                            <div class="location-detail">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${loc.address}</span>
                            </div>
                            <div class="location-detail">
                                <i class="fas fa-clock"></i>
                                <span>${loc.time}</span>
                            </div>
                            <div class="location-detail">
                                <i class="fas fa-phone"></i>
                                <span>${loc.phone}</span>
                            </div>
                            <div class="location-actions">
                                <a href="#" class="btn btn-primary btn-small">Get Directions</a>
                                <a href="#" class="btn btn-secondary btn-small">Contact</a>
                            </div>
                        </div>
                    `;
                    locationsGrid.appendChild(card);
                });
            }

            // Membership form
            const membershipForm = document.getElementById('membershipForm');
            if (membershipForm) {
                membershipForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    alert('Thank you for your application! Our team will contact you within 48 hours.');
                    membershipForm.reset();
                });
            }

            // Media Grid
            const mediaGrid = document.getElementById('mediaGrid');
            if (mediaGrid) {
                const mediaItems = [
                    {title: "Sunday Sermon Series", description: "Watch our powerful weekly sermons featuring deep biblical insights and practical wisdom.", icon: "fa-video"},
                    {title: "Podcast - Grace Talks", description: "Listen to inspiring conversations on faith, life, and spiritual growth on the go.", icon: "fa-podcast"},
                    {title: "Bible Study Resources", description: "Access comprehensive study guides and materials for personal and group Bible study.", icon: "fa-book"},
                    {title: "Worship & Music", description: "Enjoy our collection of uplifting worship songs and instrumental music.", icon: "fa-music"},
                    {title: "Leadership Teachings", description: "Learn timeless principles of effective Christian leadership and influence.", icon: "fa-chalkboard-user"},
                    {title: "Testimonies", description: "Be inspired by powerful testimonies of life transformation through faith in Christ.", icon: "fa-heart"}
                ];

                mediaItems.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'media-card';
                    card.innerHTML = `
                        <div class="media-thumbnail">
                            <i class="fas ${item.icon}"></i>
                        </div>
                        <div class="media-content">
                            <h3 class="media-title">${item.title}</h3>
                            <p class="media-description">${item.description}</p>
                            <a href="#" class="media-link">View More →</a>
                        </div>
                    `;
                    mediaGrid.appendChild(card);
                });
            }

            // Programs Grid
            const programsGrid = document.getElementById('programsGrid');
            if (programsGrid) {
                const programs = [
                    {title: "Small Groups", icon: "👥", description: "Connect with fellow believers in intimate settings for prayer, study, and fellowship."},
                    {title: "Youth Ministry", icon: "🎯", description: "Dynamic programs for young adults to grow spiritually and build meaningful connections."},
                    {title: "Outreach & Service", icon: "🤝", description: "Make a difference by serving your community through our various humanitarian initiatives."},
                    {title: "Counseling Services", icon: "💬", description: "Access professional counseling and pastoral care to navigate life's challenges."},
                    {title: "Women's Fellowship", icon: "👩‍👧", description: "Empowering programs designed for the spiritual and personal development of women."},
                    {title: "Men's Ministry", icon: "👨‍👦", description: "Impactful initiatives to equip and inspire men to lead with purpose and integrity."}
                ];

                programs.forEach(program => {
                    const card = document.createElement('div');
                    card.className = 'program-card';
                    card.innerHTML = `
                        <div class="program-image">
                            <span>${program.icon}</span>
                        </div>
                        <div class="program-content">
                            <h3 class="program-title">${program.title}</h3>
                            <p class="program-description">${program.description}</p>
                            <a href="#" class="event-link">Learn More →</a>
                        </div>
                    `;
                    programsGrid.appendChild(card);
                });
            }

            // Prayer Request form
            const prayerForm = document.getElementById('prayerForm');
            if (prayerForm) {
                prayerForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    alert('Thank you for your prayer request. Our team will pray with you and may contact you for further support. God bless you!');
                    prayerForm.reset();
                });
            }
        });