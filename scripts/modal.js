// Dados dos Projetos

const dataProjects = [
    {
        title: 'Doceria Dleitt Volta Redonda',
        date: 'Em desenvolvimento',
        description: `Landing page de mostruário e vendas de unidade de loja de doces <br><br>

        Após concluir o evento, adicionei funcionalidades extras, como: <br><br>
        
        • Produtos e serviços; <br>
        • Cadastramento de Leads <br>
        • Integração com Ifood <br>
`

    },
    {
        title: 'Pousada Casa Luke Paraty',
        date: '25 de Fevereiro de 2023',
        description: `Daily Weather é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto os dos próximos 7 dias, além da velocidade do vento, nível de umidade, data/hora e temperatura máxima e mínima. <br><br>

        Esse projeto foi desenvolvido com as seguintes ferramentas: <br><br>
        
        • HTML5; <br>
        • React <br>
        • CSS; <br>
        • Node; <br>
        • ReactStrap; <br>
       
        `, 
        repository: 'https://github.com/LukeCruz/FrontEnd_App_Pousada',
        site: 'https://casalukeparaty.com'

    },
    {
        title: 'Detector de Fadiga',
        date: '14 de Novembro de 2022',
        description: `Esse projeto foi desenvolvido parte de hardware intergrada ao software de forma a responder com sinais fisicos com um sistema embarcado utilizando a placa esp32-cam. <br><br>
        • OpenCv; <br>
        • Dlib; <br>
        • Imutils; <br>
        • Face-utils; <br>
        • Notify-run; <br>
        • scipy;`,
        repository: 'https://github.com/LukeCruz/Face_Detection_Python',

    },
    {
        title: 'CRUD - talker manager',
        date: '22 de Junho de 2022',
        description: `Uma aplicação de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso foi:🚀 <br><br> 
         • Criado uma API de um CRUD (Create, Read, Update e Delete) de palestrantes e;; <br>
        • Também foram criados alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.`,
        repository: 'https://github.com/LukeCruz/CRUD_Talker_Manager_App',

    },
    {
        title: 'PirataFLIX',
        date: 'Em desenvolvimento',
        description: "Solução de app de filmes gratuito utilizando Api de filmes com catalogo renovado mensalmente",
        repository: 'https://github.com/LukeCruz/Pirata_flix_app_de_filmes',
        site: 'pirata-flix-app-de-filmes.vercel.app'

    },
    {
        title: 'SQL consults',
        date: '22 de Junho de 2022',
        description: "Demosntração de consultas via SQL , rodando com docker isoladamente e com balanceamento de carga",
        videoSrc: '',
        linkedin: '',
        repository: '',
        site: ''

    },
    {
        title: 'Shopping Cart',
        date: '03 de Junho de 2021',
        description: "Nesse projeto você vai ter a experiência de pôr em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development)! Que te ajuda a garantir um código de qualidade, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta! ",
        repository: 'https://github.com/LukeCruz/Shopping_Cart_App',
        site:'https://shopping-cart-app-gray.vercel.app'

    },
    {
        title: 'Facebook Clone',
        date: '25 de Setembro de 2020',
        description: "Clone da pagina de cadastramento do Facebook",
        repository: 'https://github.com/LukeCruz/facebook-signUp',
        site: 'facebook-sign-up-umber.vercel.app'

    },
   {
        title: 'Jogo da cobrinha',
        date: '06 de Setembro de 2020',
        description: "Famoso jogo da cobrinha para celulares nos anos 2000 agora desenvolvido em C# para desktop ",
        linkedin: '',
        repository: 'https://github.com/LukeCruz/Game_Snake_desktop',

    },
    {
        title: 'Cash Money APP',
        date: '06 de Outubro de 2020',
        description: "Muitas pessoas ao receber algum Cashback acabam gastando de forma ineficiente ou as vezes nem sabem que tem esse dinheiro. Há várias plataformas e tipos de Cashback mas nenhuma centralização ou gestão destes recursos. As vezes você tem alguma divida e não tem dinheiro em conta bancária mas tem dinheiro parado provindo de Cashback em carteiras digitais. Falta de informação por parte dos usuários sobre como funciona o Cashback.",
       
        linkedin: '',
        repository: 'https://github.com/LukeCruz/App_cash_money_open_banking_solution',

    },
    {
        title: 'App Rota 64',
        date: '04 de Setembro de 2021',
        description: "O objetivo desse App é Conectar os caminhoneiros aos pontos de parada nas rotas em que ele se encontra no momento, facilitando dessa forma a qualidade de vida desses profissionais.",
        linkedin: '',
        repository: 'https://github.com/LukeCruz/Hackathon_CCR_App_Rota64',

    },
    

]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {

            if (index != 5) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
            modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()
