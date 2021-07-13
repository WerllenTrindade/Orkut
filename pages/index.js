import Box from './src/components/Box/Index'
import MainGrid from './src/components/mainGrid/Index'
import { AlurakutMenu, OrkutNostalgicIconSet } from './src/components/Lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations/Index'

  function ProfileSidebar(props){
    return(
      <Box >
      <img 
      src={`https://github.com/${props.photoGitHub}.png`}
      style={{ borderRadius: '8px' }}
      ></img>
      </Box>
    )
  }

  
  export default function Home() {
    
    const githubUser = 'WerllenTrindade';
    const pessoasFavoritas = [
      'WerllenTrindade',
      'omariosouto',
      'peas', 
      'rafaballerini',
      'marcobrunodev',
      'felipefialho'
    ]

    
  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea' }}>
      <ProfileSidebar photoGitHub={githubUser} />
      </div>

      <div>
        <Box
         className="welcomeArea"
         style={{welcomeArea: 'welcomeArea' }}>
            <h1 className="title">
              Bem vindo(a)
              </h1>

            <OrkutNostalgicIconSet/>
        </Box>
      </div>

      <ProfileRelationsBoxWrapper
       className="profileRelationsArea"
       style={{profileRelationsArea: 'profileRelationsArea' }}>
                 <h2 className="smallTitle">
         Pessoas da comunidade ({pessoasFavoritas.length})
         </h2>
         <ul>
         {pessoasFavoritas.map( itemAtual => {
           return (
            <li>
           <a href={`/users/${itemAtual}`} key={itemAtual}>
            <img src={`https://github.com/${itemAtual}.png`}/>
            <span>{itemAtual}</span>
          </a>
          </li>
          )
          })}
         </ul>
      </ProfileRelationsBoxWrapper>
    </MainGrid>
    </>
    )
}
