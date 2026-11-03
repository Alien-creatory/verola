
    const glow = document.querySelector('.cursor-glow');
    const loader = document.querySelector('.loader-screen');

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(mode) {
      if(mode === 'light') {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }

    applyTheme(prefersDark.matches ? 'dark' : 'light');

    prefersDark.addEventListener('change', (e) => {
      applyTheme(e.matches ? 'dark' : 'light');
    });

    if(chatToggle){
      chatToggle.addEventListener('click', () => {
        chatPanel.classList.toggle('active');
      });
    }

    const hoverAudio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');

    document.querySelectorAll('button, .chat-icon').forEach(el => {
      el.addEventListener('mouseenter', () => {
        hoverAudio.volume = 0.04;
        hoverAudio.currentTime = 0;
        hoverAudio.play();
      });
    });

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 3200);
    });

    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('button, a, .service-card, .portfolio-card, .premium-input').forEach(el => {
      el.addEventListener('mouseenter', () => {
        glow.classList.add('active');
      });

      el.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
      });
    });
    const reveals = document.querySelectorAll('.reveal');

    const counters = document.querySelectorAll('.metric-number');

    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 80;

        if(count < target) {

            counter.innerText = Math.ceil(count + increment);

                    setTimeout(updateCounter, 30);

        } else {

            if(counter.dataset.target == "4.9"){
                counter.innerText = "4.9★";
            }

            else if(counter.dataset.target == "94"){
                counter.innerText = "94%";
            }

            else {
                counter.innerText = target + "+";
            }

        }
      };

      updateCounter();
    });

    document.querySelectorAll('.magnetic-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 18;
        const moveY = (y - rect.height / 2) / 18;

        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(0,0)';
      });
    });

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      document.querySelector('.hero-image').style.transform = `scale(${1.08 + scrolled * 0.00008})`;

      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    });

    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
        navbar.style.background = 'rgba(10,10,10,0.92)';
      } else {
        navbar.style.background = 'rgba(15,15,16,0.7)';
      }
    });