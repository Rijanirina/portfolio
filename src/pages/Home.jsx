import axios from 'axios';

export default function Home(props) {
  return (
    <div className=' w-full h-screen bg-neutral-900'>
      <div className='flex fixed  w-full h-10 p-4 justify-between items-center bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white font-semibold text-md'>
        <div className='hover:border-b-2 hover:border-b-solid hover:border-b-3'>
          Portfolio
        </div>
        <div className='hover:border-b-2 hover:border-b-solid hover:border-b-3'>
          Accueil
        </div>
        <div className='hover:border-b-2 hover:border-b-solid hover:border-b-3'>
          About me
        </div>
      </div>
      <div className='w-full mx-auto h-screen'>
        <div className='flex w-full h-full text-white text-left justify-center items-center'>
          <div className='space-y-10'>
            <p className=' text-xl font-semibold'>Hello</p>
            <p className='text-5xl font-semibold '>
              I AM RIJANIRINA
              <p>RAVELOMANANTSOA</p>
            </p>
            <p className=' text-lg font-semibold'>
              TELECOM ENGINEER & WEB DEVELOPPER
            </p>
          </div>
        </div>
        <div className='w-full h-full bg-neutral-900 text-white'>
          <div className='w-1/2 mx-auto'>
            <p className='font-bold text-xl'>PROFILE</p>
            <p className=' font-sans subpixel-antialiased'>
              Je me nomme Ravelomanantsoa Rijanirina, je suis un futur ingenieur
              en telecommunication et developpeur fullstack JS.
              <p>
                Développeur passionné et polyvalent avec 3 années d'expérience
                dans la conception, le développement d'applications web. Expert
                dans les technologies JavaScript, React, Node.js, Python, Java.
                Fort d'une solide compréhension des principes de développement
                logiciel et d'une capacité à résoudre des problèmes. Habitué à
                travailler en équipe et à respecter les délais. Toujours à
                l'affût des nouvelles technologies et désireux de contribuer à
                des projets innovants.
              </p>
              <p className='mt-8'>
                <button
                  className='outline-1 outline-white mx-auto p-4 w-1/2 font-bold hover:bg-white hover:text-neutral-900 '
                  onClick={async () => {
                    axios
                      .get('https://portfolio-wmd4.onrender.com/lirecv')
                      .then(async () => {
                        console.log('OKKK');
                      })
                      .catch(async (err) => {
                        console.log(err);
                      });
                  }}
                >
                  Telecharger CV
                </button>
              </p>
              <p className='mt-8'>
                <button
                  className='outline-1 outline-white mx-auto p-4 w-1/2 font-bold hover:bg-white hover:text-neutral-900 '
                  onClick={async () => {
                    axios.get(
                      'https://portfolio-wmd4.onrender.com/lireDiplomeLicence'
                    );
                  }}
                >
                  Telecharger Attestation de diplome LICENCE
                </button>
              </p>
              <p className='mt-8'>
                <button
                  className='outline-1 outline-white mx-auto p-4 w-1/2 font-bold hover:bg-white hover:text-neutral-900 '
                  onClick={async () => {
                    axios.get(
                      'https://portfolio-wmd4.onrender.com/lireDiplomeBacc'
                    );
                  }}
                >
                  Telecharger diplome Baccalaureat serie C
                </button>
              </p>
              <p className='mt-8'>
                <button
                  className='outline-1 outline-white mx-auto p-4 w-1/2 font-bold hover:bg-white hover:text-neutral-900 '
                  onClick={async () => {
                    axios.get(
                      'https://portfolio-wmd4.onrender.com/lireDiplomeDelf'
                    );
                  }}
                >
                  Telecharger Attestation de diplome DELF B2
                </button>
              </p>
              <p className='mt-8'>
                <button
                  className='outline-1 outline-white mx-auto p-4 w-1/2 font-bold hover:bg-white hover:text-neutral-900 '
                  onClick={async () => {
                    axios.get(
                      'https://portfolio-wmd4.onrender.com/lireCertificatDeScolariteM2'
                    );
                  }}
                >
                  Telecharger certificat de Scolarité Master 2
                </button>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
