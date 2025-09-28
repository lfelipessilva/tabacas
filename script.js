// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "Marlboro Red",
        categoria: "Cigarros",
        descricao: "O clássico cigarro americano com sabor intenso e aroma marcante.",
        preco: "R$ 12,50",
        icone: "🚬"
    },
    {
        id: 2,
        nome: "Cohiba Siglo VI",
        categoria: "Charutos",
        descricao: "Charuto cubano premium com sabor complexo e aroma sofisticado.",
        preco: "R$ 450,00",
        icone: "🚬"
    },
    {
        id: 3,
        nome: "Camel Blue",
        categoria: "Cigarros",
        descricao: "Cigarro com sabor suave e aroma característico do tabaco turco.",
        preco: "R$ 11,80",
        icone: "🚬"
    },
    {
        id: 4,
        nome: "Montecristo No. 2",
        categoria: "Charutos",
        descricao: "Charuto cubano clássico com formato torpedo e sabor equilibrado.",
        preco: "R$ 380,00",
        icone: "🚬"
    },
    {
        id: 5,
        nome: "Lucky Strike Original",
        categoria: "Cigarros",
        descricao: "Cigarro com sabor original e aroma tradicional americano.",
        preco: "R$ 10,90",
        icone: "🚬"
    },
    {
        id: 6,
        nome: "Romeo y Julieta Churchill",
        categoria: "Charutos",
        descricao: "Charuto cubano com formato Churchill e sabor rico e complexo.",
        preco: "R$ 320,00",
        icone: "🚬"
    },
    {
        id: 7,
        nome: "Winston Classic",
        categoria: "Cigarros",
        descricao: "Cigarro com sabor clássico e aroma natural do tabaco.",
        preco: "R$ 9,50",
        icone: "🚬"
    },
    {
        id: 8,
        nome: "Partagas Serie D No. 4",
        categoria: "Charutos",
        descricao: "Charuto cubano robusto com sabor forte e aroma intenso.",
        preco: "R$ 280,00",
        icone: "🚬"
    },
    {
        id: 9,
        nome: "Kent Blue",
        categoria: "Cigarros",
        descricao: "Cigarro com filtro especial e sabor suave e refrescante.",
        preco: "R$ 11,20",
        icone: "🚬"
    },
    {
        id: 10,
        nome: "H. Upmann Magnum 50",
        categoria: "Charutos",
        descricao: "Charuto cubano com formato magnum e sabor elegante.",
        preco: "R$ 350,00",
        icone: "🚬"
    },
    {
        id: 11,
        nome: "Isqueiro Zippo Clássico",
        categoria: "Acessórios",
        descricao: "Isqueiro a gasolina com design clássico e durabilidade excepcional.",
        preco: "R$ 120,00",
        icone: "🔥"
    },
    {
        id: 12,
        nome: "Cortador de Charuto Xikar",
        categoria: "Acessórios",
        descricao: "Cortador de charuto de alta qualidade com lâmina afiada.",
        preco: "R$ 85,00",
        icone: "✂️"
    },
    {
        id: 13,
        nome: "Porta-charutos de Couro",
        categoria: "Acessórios",
        descricao: "Porta-charutos de couro legítimo com capacidade para 3 charutos.",
        preco: "R$ 180,00",
        icone: "💼"
    },
    {
        id: 14,
        nome: "Cinzeiro de Cristal",
        categoria: "Acessórios",
        descricao: "Cinzeiro de cristal com design elegante e base pesada.",
        preco: "R$ 65,00",
        icone: "🕳️"
    },
    {
        id: 15,
        nome: "Cachimbo de Madeira",
        categoria: "Acessórios",
        descricao: "Cachimbo artesanal de madeira briar com acabamento premium.",
        preco: "R$ 250,00",
        icone: "🍯"
    },
    {
        id: 16,
        nome: "Tabaco para Cachimbo",
        categoria: "Tabaco",
        descricao: "Tabaco aromático para cachimbo com sabor de baunilha e mel.",
        preco: "R$ 45,00",
        icone: "🌿"
    },
    {
        id: 17,
        nome: "Papel de Cigarro OCB",
        categoria: "Acessórios",
        descricao: "Papel de cigarro ultra fino com cola natural e queima lenta.",
        preco: "R$ 8,50",
        icone: "📄"
    },
    {
        id: 18,
        nome: "Filtros de Cigarro",
        categoria: "Acessórios",
        descricao: "Filtros de cigarro com carvão ativado para redução de alcatrão.",
        preco: "R$ 12,00",
        icone: "🔍"
    },
    {
        id: 19,
        nome: "Humidor de Cedro",
        categoria: "Acessórios",
        descricao: "Humidor de cedro com higrômetro e capacidade para 25 charutos.",
        preco: "R$ 450,00",
        icone: "📦"
    },
    {
        id: 20,
        nome: "Tabaco para Narguilé",
        categoria: "Tabaco",
        descricao: "Tabaco aromático para narguilé com sabor de frutas tropicais.",
        preco: "R$ 35,00",
        icone: "🌿"
    }
];

// Função para renderizar produtos
function renderizarProdutos() {
    const produtosGrid = document.getElementById('produtos-grid');
    
    produtos.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.className = 'produto-card';
        produtoCard.innerHTML = `
            <div class="produto-image">
                ${produto.icone}
            </div>
            <div class="produto-info">
                <div class="produto-categoria">${produto.categoria}</div>
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-preco">${produto.preco}</div>
                <div class="produto-buttons">
                    <button class="btn-secondary" onclick="adicionarAoCarrinho(${produto.id})">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                    <button class="btn-secondary" onclick="verDetalhes(${produto.id})">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                </div>
            </div>
        `;
        produtosGrid.appendChild(produtoCard);
    });
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        // Simular adição ao carrinho
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        const itemExistente = carrinho.find(item => item.id === id);
        
        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({...produto, quantidade: 1});
        }
        
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        // Mostrar notificação
        mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
    }
}

// Função para ver detalhes do produto
function verDetalhes(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        alert(`Detalhes do Produto:\n\nNome: ${produto.nome}\nCategoria: ${produto.categoria}\nDescrição: ${produto.descricao}\nPreço: ${produto.preco}`);
    }
}

// Função para mostrar notificação
function mostrarNotificacao(mensagem) {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notificacao.textContent = mensagem;
    
    document.body.appendChild(notificacao);
    
    // Animar entrada
    setTimeout(() => {
        notificacao.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notificacao.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notificacao);
        }, 300);
    }, 3000);
}

// Função para scroll suave
function scrollSuave() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajustar para o header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para menu mobile
function menuMobile() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevenir scroll do body quando menu estiver aberto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Fechar menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Fechar menu ao redimensionar a tela
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Função para formulário de contato
function formularioContato() {
    const form = document.querySelector('.contato-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            mostrarNotificacao('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    }
}

// Função para animações ao scroll
function animacoesScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const elementos = document.querySelectorAll('.produto-card, .stat, .info-item');
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Função para filtro de produtos
function filtroProdutos() {
    // Adicionar botões de filtro
    const produtosSection = document.querySelector('.produtos .container');
    const filtros = document.createElement('div');
    filtros.className = 'filtros';
    filtros.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    `;
    
    const categorias = ['Todos', 'Cigarros', 'Charutos', 'Acessórios', 'Tabaco'];
    
    categorias.forEach(categoria => {
        const botao = document.createElement('button');
        botao.textContent = categoria;
        botao.className = 'btn-filtro';
        botao.style.cssText = `
            padding: 10px 20px;
            border: 2px solid #3498db;
            background: ${categoria === 'Todos' ? '#3498db' : 'transparent'};
            color: ${categoria === 'Todos' ? 'white' : '#3498db'};
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        `;
        
        botao.addEventListener('click', () => filtrarProdutos(categoria, botao));
        filtros.appendChild(botao);
    });
    
    produtosSection.insertBefore(filtros, document.getElementById('produtos-grid'));
}

function filtrarProdutos(categoria, botaoAtivo) {
    // Atualizar botões ativos
    document.querySelectorAll('.btn-filtro').forEach(btn => {
        btn.style.background = 'transparent';
        btn.style.color = '#3498db';
    });
    botaoAtivo.style.background = '#3498db';
    botaoAtivo.style.color = 'white';
    
    // Filtrar produtos
    const produtosCards = document.querySelectorAll('.produto-card');
    
    produtosCards.forEach(card => {
        const categoriaProduto = card.querySelector('.produto-categoria').textContent;
        
        if (categoria === 'Todos' || categoriaProduto === categoria) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função para melhorar experiência touch em smartphones
function touchOptimizations() {
    // Melhorar botões para touch
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.style.webkitTapHighlightColor = 'transparent';
        button.style.touchAction = 'manipulation';
    });
    
    // Melhorar links para touch
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.webkitTapHighlightColor = 'transparent';
    });
    
    // Prevenir zoom duplo toque em inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('touchstart', function() {
            if (input.scale) {
                input.scale = 1;
            }
        });
    });
    
    // Melhorar scroll suave em iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch';
    }
}

// Função para otimizar performance em mobile
function mobilePerformance() {
    // Lazy loading para imagens (quando adicionadas)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce para scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Executar ações de scroll aqui se necessário
        }, 10);
    });
}

// Função para detectar dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    renderizarProdutos();
    scrollSuave();
    menuMobile();
    formularioContato();
    animacoesScroll();
    filtroProdutos();
    touchOptimizations();
    mobilePerformance();
    
    // Adicionar CSS para animação fadeIn e otimizações mobile
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            height: calc(100vh - 70px);
            background: white;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            padding: 2rem 1rem;
            z-index: 999;
            overflow-y: auto;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        /* Otimizações para touch */
        * {
            -webkit-tap-highlight-color: transparent;
        }
        
        button, .btn-primary, .btn-secondary {
            touch-action: manipulation;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
        }
        
        /* Melhorar legibilidade em telas pequenas */
        @media (max-width: 768px) {
            body {
                -webkit-text-size-adjust: 100%;
                text-size-adjust: 100%;
            }
            
            input, textarea, select {
                font-size: 16px !important; /* Previne zoom no iOS */
            }
        }
        
        /* Melhorar performance de scroll */
        .produtos-grid, .sobre-stats, .footer-content {
            will-change: transform;
        }
        
        /* Animações suaves para mobile */
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
});
