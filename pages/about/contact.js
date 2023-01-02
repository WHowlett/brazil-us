import Head from 'next/head';
import Layout from '../../component/Layout';
import Form from '../../component/contact';
import Image from 'next/image'
import Link from 'next/link';
import Button from 'react-bootstrap/button';

export default function Contact() {
    return(
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <h1 className='text-center text-info'>Contate-nos / Contact US</h1>
            <div className='text-center'>
                <Image 
                src="/contact-flag.png"
                width="350"
                height="220"
                alt='US and Brazil flag mixed with faded bottom'
                />
            </div>
            <br />
            <div className='text-center reduced-size'>
                <h2>Seeking volunteers for the following:</h2>
                <ol className='listnone'>
                    <li><strong>-</strong> Admin</li>
                    <li><strong>-</strong> Contributors for blogs and breaking news</li>
                    <li><strong>-</strong> More will be listed at later time.</li>
                </ol>
            </div>
            <div>
                <div className='text-center mt-3 reduce-size'>
                    <h2><stong>About Developer</stong></h2>
                    <p>Olá, meu nome é Wayne Howlett e sou o criador deste site. Espero que seja um recurso útil para aqueles que buscam informações e assistência. O site foi projetado usando Next.js e React, dois frameworks populares para desenvolvimento full stack. Nas próximas semanas, haverá muitos novos desenvolvimentos e recursos adicionais adicionados ao site. Se você tiver alguma dúvida ou comentário sobre como melhorar o site, não hesite em entrar em contato comigo. Também estou procurando voluntários para escrever postagens de blog ou artigos de notícias de última hora que forneçam informações valiosas e ajudem nossos leitores. Obrigado por visitar o site e espero que seja útil.</p>
                    <p>Hello, my name is Wayne Howlett and I am the creator of this website. I hope that it will be a helpful resource for those seeking information and assistance. The website has been designed using Next.js and React, two popular frameworks for full stack development. In the coming weeks, there will be many new developments and additional resources added to the website. If you have any questions or feedback on how to improve the website, please don't hesitate to contact me. I am also seeking volunteers to write blog posts or breaking news articles that will provide valuable information and help to our readers. Thank you for visiting the website and I hope you find it useful.</p>
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
            <br/>
            <Form />
        </Layout>
    )
}