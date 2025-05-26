/**
 * Script para funcionalidades do blog
 * ASL Software Engineering
 * 2025
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização de componentes do blog
    initBlogSearch();
    initBlogFilters();
    initBlogPagination();
    initRelatedPosts();
    initCommentSystem();
    initSocialSharing();
    initNewsletterForm();
    
    // Adiciona classes de animação aos elementos do blog
    animateBlogElements();
});

/**
 * Inicializa a funcionalidade de busca no blog
 */
function initBlogSearch() {
    const searchForm = document.querySelector('.blog-search-form');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input[type="text"]');
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm.length < 3) {
            showNotification('Por favor, digite pelo menos 3 caracteres para buscar.', 'warning');
            return;
        }
        
        // Simulação de busca - em produção, isso seria substituído por uma busca real
        console.log('Buscando por:', searchTerm);
        showNotification('Buscando por: ' + searchTerm, 'info');
        
        // Redirecionar para página de resultados (em produção)
        // window.location.href = '../blog.html?search=' + encodeURIComponent(searchTerm);
    });
}

/**
 * Inicializa filtros de categorias e tags
 */
function initBlogFilters() {
    // Implementação dos filtros de categoria e tags
    const categoryLinks = document.querySelectorAll('.blog-categories a');
    const tagLinks = document.querySelectorAll('.blog-tags a');
    
    // Adiciona listeners para categorias
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Em produção, isso seria tratado na página de destino
            console.log('Categoria selecionada:', this.textContent.trim());
        });
    });
    
    // Adiciona listeners para tags
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Em produção, isso seria tratado na página de destino
            console.log('Tag selecionada:', this.textContent.trim());
        });
    });
}

/**
 * Inicializa a paginação do blog
 */
function initBlogPagination() {
    const paginationLinks = document.querySelectorAll('.blog-pagination a');
    if (!paginationLinks.length) return;
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('disabled')) {
                e.preventDefault();
                return;
            }
            
            // Em produção, isso seria tratado na página de destino
            console.log('Página selecionada:', this.textContent.trim());
        });
    });
}

/**
 * Inicializa a exibição de posts relacionados
 */
function initRelatedPosts() {
    // Lógica para carregar posts relacionados dinamicamente (se necessário)
    const relatedPostsSection = document.querySelector('.blog-post-related');
    if (!relatedPostsSection) return;
    
    // Em produção, aqui poderia haver uma chamada AJAX para buscar posts relacionados
    console.log('Seção de posts relacionados inicializada');
}

/**
 * Inicializa o sistema de comentários
 */
function initCommentSystem() {
    const commentForm = document.querySelector('.blog-post-comment-form form');
    if (!commentForm) return;
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('#commentName');
        const emailInput = this.querySelector('#commentEmail');
        const contentInput = this.querySelector('#commentContent');
        
        // Validação básica
        if (!nameInput.value.trim() || !emailInput.value.trim() || !contentInput.value.trim()) {
            showNotification('Por favor, preencha todos os campos obrigatórios.', 'warning');
            return;
        }
        
        // Simulação de envio de comentário - em produção, isso seria uma chamada AJAX
        console.log('Comentário enviado:', {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            content: contentInput.value.trim()
        });
        
        showNotification('Seu comentário foi enviado com sucesso e está aguardando moderação.', 'success');
        
        // Limpa o formulário
        contentInput.value = '';
    });
    
    // Adiciona funcionalidade aos botões de resposta
    const replyButtons = document.querySelectorAll('.blog-post-comment-actions a:nth-child(2)');
    replyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const commentAuthor = this.closest('.blog-post-comment').querySelector('h5').textContent;
            const contentInput = document.querySelector('#commentContent');
            
            contentInput.value = `@${commentAuthor}: `;
            contentInput.focus();
            
            // Scroll para o formulário
            document.querySelector('.blog-post-comment-form').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

/**
 * Inicializa os botões de compartilhamento social
 */
function initSocialSharing() {
    const shareButtons = document.querySelectorAll('.blog-post-share a');
    if (!shareButtons.length) return;
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            let shareUrl = '';
            
            // Identifica a rede social pelo ícone
            if (this.innerHTML.includes('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            } else if (this.innerHTML.includes('twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            } else if (this.innerHTML.includes('linkedin')) {
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            } else if (this.innerHTML.includes('whatsapp')) {
                shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

/**
 * Inicializa o formulário de newsletter
 */
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.blog-newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!isValidEmail(email)) {
            showNotification('Por favor, insira um email válido.', 'warning');
            return;
        }
        
        // Simulação de inscrição - em produção, isso seria uma chamada AJAX
        console.log('Email inscrito na newsletter:', email);
        
        showNotification('Obrigado por se inscrever em nossa newsletter!', 'success');
        
        // Limpa o formulário
        emailInput.value = '';
    });
}

/**
 * Adiciona animações aos elementos do blog
 */
function animateBlogElements() {
    // Adiciona classes de animação aos elementos do blog
    const blogPosts = document.querySelectorAll('.blog-card');
    
    if (blogPosts.length) {
        blogPosts.forEach((post, index) => {
            post.style.animationDelay = `${index * 0.1}s`;
            post.classList.add('animate-fade-in');
        });
    }
    
    // Animação para o post principal
    const mainPost = document.querySelector('.blog-post');
    if (mainPost) {
        mainPost.classList.add('animate-fade-in');
    }
}

/**
 * Exibe uma notificação na tela
 * @param {string} message - Mensagem a ser exibida
 * @param {string} type - Tipo de notificação (success, info, warning, error)
 */
function showNotification(message, type = 'info') {
    // Verifica se já existe um container de notificações
    let notificationContainer = document.querySelector('.notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        // Estiliza o container
        notificationContainer.style.position = 'fixed';
        notificationContainer.style.top = '20px';
        notificationContainer.style.right = '20px';
        notificationContainer.style.zIndex = '9999';
    }
    
    // Cria a notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estiliza a notificação
    notification.style.backgroundColor = type === 'success' ? '#4CAF50' : 
                                        type === 'warning' ? '#FF9800' : 
                                        type === 'error' ? '#F44336' : '#2196F3';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.marginBottom = '10px';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(50px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    
    // Adiciona a notificação ao container
    notificationContainer.appendChild(notification);
    
    // Anima a entrada da notificação
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove a notificação após 5 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

/**
 * Valida um endereço de email
 * @param {string} email - Email a ser validado
 * @returns {boolean} - Verdadeiro se o email for válido
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
