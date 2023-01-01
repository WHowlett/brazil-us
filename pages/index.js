import Head from 'next/head';
import Layout from '../component/Layout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Link from 'next/link';

import Greeting from '../component/greeting';
import Image from 'next/image';



export default function Home() {
  return (
    <Layout Home>
      <Head>
        <title>Home</title>
      </Head>

      <Greeting></Greeting>
      <br></br>

      <div className='text-center port'>
        <p>Este site é um recurso valioso para indivíduos que desejam imigrar para ou de qualquer um dos países. Ele fornece informações sobre as várias opções de imigração disponíveis, incluindo vistos temporários e permanentes, bem como os requisitos e processos envolvidos para obtê-los.</p>
        <p>Seja você um cidadão brasileiro querendo se mudar para os Estados Unidos ou um cidadão americano querendo morar no Brasil, este site pode fornecer as informações necessárias para você tomar decisões informadas sobre sua jornada de imigração. É importante revisar cuidadosamente os requisitos para cada tipo de visto e reunir todos os documentos necessários antes de iniciar o processo de solicitação.</p>
        <p>Esperamos que este site sirva como um guia útil enquanto você navega no processo de imigração e torna realidade o seu sonho de viver em um novo país.</p>
      </div>
      <hr></hr>
      <br />
      <div className='text-center english'>
        <p>This website is a valuable resource for individuals seeking to immigrate to or from either country. It provides information on the various immigration options available, including temporary and permanent visas, as well as the requirements and processes involved in obtaining them.</p>
        <p>Whether you are a Brazilian citizen looking to move to the United States or a US citizen seeking to live in Brazil, this website can provide you with the information you need to make informed decisions about your immigration journey. It is important to carefully review the requirements for each type of visa and to gather all necessary documents before beginning the application process.</p>
        <p>We hope that this website will serve as a helpful guide as you navigate the immigration process and make your dreams of living in a new country a reality.</p>
      </div>
      <div className='card-center'>
        <CardGroup>
          <Card border="secondary">
            <div className='card-center'>
              <Image
                src="/BrazilBall.png"
                width="250"
                height="250"
              ></Image>
            </div>
            <Card.Body>
              <Card.Title className='text-center'><strong>Brasileiro vem para os Estados Unidos</strong></Card.Title>
              <Card.Text>
                <p className='text-center'>É importante que os cidadãos brasileiros que desejam imigrar para os Estados Unidos analisem cuidadosamente as várias opções de visto disponíveis e reúnam todos os documentos necessários antes de iniciar o processo de solicitação. Algumas opções comuns de visto para cidadãos brasileiros incluem vistos de visitante temporário, vistos de estudante, vistos de trabalho e vistos familiares. Cada tipo de visto tem seus próprios requisitos e processos, por isso é importante revisar cuidadosamente as opções e reunir todos os documentos necessários antes de iniciar o processo de solicitação. Além dos vistos, os brasileiros com filhos nascidos nos Estados Unidos podem ter interesse em obter o Consular Report of Birth Abroad (CRBA) para seus filhos, ou em obter ou renovar o passaporte americano para seus filhos. Nosso site possui recursos disponíveis para auxiliar nesses processos, bem como em qualquer outro serviço.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className='text-center'>
                <Button className='text-center' variant="primary">Clique aqui para encontrar mais informações</Button>
              </div>
            </Card.Footer>
          </Card>
          <Card border="info">
            <div className='card-center'>
              <Image
                src="/USBall.png"
                width="250"
                height="250"
              ></Image>
            </div>
            <Card.Body>
              <Card.Title className='text-center'><strong>American coming to Brazil</strong></Card.Title>
              <Card.Text>
                <p className='text-center'>If you are a US citizen looking for information about immigration to Brazil, our website contains a number of tools to assist you. We offer everything you need to make educated decisions about your immigration journey, from information on the different temporary and permanent visas available to US residents to aid in contacting the US Embassy in Brazil for consular and emergency services. We also provide details on the CRBA and the passport application procedure and many more. Click button below to find what you are looking for.</p>
                <br />
                <br />
                <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className='text-center'>
                <Button className='text-center' variant="primary">Click here to find more information</Button>
              </div>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <br>
      </br>
      <div className='text-warning'>
        <h1 className='text-center text-warning'>Este site está em construção / This site is under construction  </h1>
        <div className='text-center port'>
          <p>O site que está sendo desenvolvido terá diversas funcionalidades adicionadas nas próximas semanas. Estas funcionalidades incluirão uma função de chat para os utilizadores discutirem diversos temas, um calendário com gráficos, acesso a documentos e informações sobre diversos assuntos, e uma secção de blog que é gerida pelos colaboradores. O objetivo do site é ter todas as informações que os usuários possam precisar em um só lugar e fornecer uma plataforma para os usuários fazerem perguntas e obterem respostas. Algumas ideias adicionais para recursos que podem ser adicionados ao site incluem uma função de pesquisa, ferramentas interativas ou calculadoras, contas de usuário, um fórum ou quadro de discussão, opções de personalização, conteúdo de vídeo, integração de mídia social, um feed de notícias, enquetes ou pesquisas, e-mail boletins informativos, conteúdo gerado pelo usuário, uma seção de perguntas e respostas, recomendações personalizadas, opções de tradução e um aplicativo móvel.</p>
        </div>
        <div className='text-center english'>
          <p>The website that is being developed will have a variety of features added in the coming weeks. These features will include a chat function for users to discuss different topics, a timetable with graphics, access to documents and information on various subjects, and a blog section that is managed by contributors. The goal of the website is to have all information that users might need in one place and to provide a platform for users to ask questions and get answers. Some additional ideas for features that could be added to the website include a search function, interactive tools or calculators, user accounts, a forum or discussion board, personalization options, video content, social media integration, a news feed, polls or surveys, email newsletters, user-generated content, a Q&A section, personalized recommendations, translation options, and a mobile app.</p>
        </div>
      </div>
      <div className='text-center'>
        <Button>
          <div>
          <Link href="https://wa.me/+5527993122966">Contact Developer via Whatsapp
          </Link>
          </div>
        </Button>
        <br />
      </div>
    </Layout>
  )
};