
        // ====== MODO CLARO/OSCURO ======
        function toggleTheme() {
            const body = document.body;
            const icon = document.getElementById('themeIcon');
            const text = document.getElementById('themeText');

            body.classList.toggle('light-mode');

            if (body.classList.contains('light-mode')) {
                icon.className = 'fas fa-sun';
                text.textContent = 'Claro';
                localStorage.setItem('theme', 'light');
            } else {
                icon.className = 'fas fa-moon';
                text.textContent = 'Oscuro';
                localStorage.setItem('theme', 'dark');
            }

            mostrarToast(body.classList.contains('light-mode') ? '☀️ Modo claro' : '🌙 Modo oscuro');
        }

        // ====== CARGAR TEMA GUARDADO ======
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme');
            const icon = document.getElementById('themeIcon');
            const text = document.getElementById('themeText');

            if (savedTheme === 'light') {
                document.body.classList.add('light-mode');
                icon.className = 'fas fa-sun';
                text.textContent = 'Claro';
            } else {
                icon.className = 'fas fa-moon';
                text.textContent = 'Oscuro';
            }

            // ====== NAVEGACIÓN ======
            const navTabs = document.querySelectorAll('.nav-tab');
            const windows = document.querySelectorAll('.window');

            window.cambiarVentana = function(windowId) {
                windows.forEach(w => w.classList.remove('active'));
                const targetWindow = document.getElementById('window-' + windowId);
                if (targetWindow) targetWindow.classList.add('active');
                navTabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.dataset.window === windowId) tab.classList.add('active');
                });
                const nombres = { 'home': 'Inicio', 'sobremi': 'Sobre Mí', 'certificados': 'Certificados', 'habilidades': 'Habilidades', 'contacto': 'Contacto' };
                mostrarToast('📄 ' + (nombres[windowId] || windowId));

                if (windowId === 'habilidades') {
                    setTimeout(() => {
                        document.querySelectorAll('.lang-item-modern').forEach(item => {
                            item.classList.remove('active');
                            setTimeout(() => {
                                item.classList.add('active');
                            }, 50);
                        });
                    }, 300);
                }
            };

            navTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    cambiarVentana(this.dataset.window);
                });
            });

            // ====== ANIMACIÓN DE BARRAS DE PROGRESO ======
            setTimeout(() => {
                document.querySelectorAll('.lang-item-modern').forEach(item => {
                    const fill = item.querySelector('.progress-bar-fill');
                    const target = item.dataset.percentage || 0;
                    setTimeout(() => {
                        fill.style.width = target + '%';
                    }, 500);
                });
            }, 800);

            // ====== TOAST ======
            window.mostrarToast = function(mensaje) {
                const toast = document.getElementById('toast');
                document.getElementById('toastMessage').textContent = mensaje;
                toast.classList.add('show');
                if (window.toastTimeout) clearTimeout(window.toastTimeout);
                window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
            };

            setTimeout(() => mostrarToast('✨ ¡Bienvenida, Ruth!'), 500);
        });

        // ====== FUNCIONES DEL MODAL ======
        function abrirModal(titulo, rutaImagen) {
            const modal = document.getElementById('certModal');
            const title = document.getElementById('modalCertTitle');
            const body = document.getElementById('modalBody');

            title.textContent = titulo;

            const img = new Image();
            img.onload = function() {
                body.innerHTML = `<img src="${rutaImagen}" alt="${titulo}" />`;
            };
            img.onerror = function() {
                body.innerHTML = `
                    <div class="placeholder-image">
                        <i class="fas fa-file-image"></i>
                        <p><strong>${titulo}</strong></p>
                        <p>Imagen no disponible</p>
                        <span class="sub">📁 ${rutaImagen}</span>
                    </div>
                `;
            };
            img.src = rutaImagen;

            if (img.complete) {
                if (img.naturalWidth === 0) {
                    body.innerHTML = `
                        <div class="placeholder-image">
                            <i class="fas fa-file-image"></i>
                            <p><strong>${titulo}</strong></p>
                            <p>Imagen no disponible</p>
                            <span class="sub">📁 ${rutaImagen}</span>
                        </div>
                    `;
                } else {
                    body.innerHTML = `<img src="${rutaImagen}" alt="${titulo}" />`;
                }
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            mostrarToast('📜 ' + titulo);
        }

        function cerrarModal(event) {
            if (event && event.target !== event.currentTarget && !event.target.closest('.modal-content')) {
                return;
            }
            const modal = document.getElementById('certModal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                cerrarModal();
            }
        });
    