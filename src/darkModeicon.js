import { FiSun,  FiMoon } from "react-icons/fi";
import Cookies from 'universal-cookie';
import { useEffect,useState} from "react";

const cookies = new Cookies()
export default function DarkModeIcon({size}){
    const [dark, setDark] = useState({isActive: null, styles:{
        light:{fondoColor: 'white', 
          navColor: 'white',
          linksColor: 'black',
          nombreColor: 'black',
          homeColor: 'black',
          bodyColor: '#E7E7E7',
          tituloColor:  '#484848',
          ContactButtonColor: 'black',
          ContactButtonFontColor: 'white',
          ContactButtonHoverColor: '#30b069',
          ContactButtonHoverFontColor: 'black',
          linkHoverColor: '#787878',
          resColor: 'white',
          resFontColor: 'black',
          condataName: 'black',
        },
         
        dark: { fondoColor: '#1A202C', 
                 navColor: '#1A202C',
                 linksColor: 'white',
                 nombreColor: 'white',
                 homeColor: 'white',
                 bodyColor: '#0f131a',
                 tituloColor:  'gray',
                 ContactButtonColor: '#81E6D9',
                  ContactButtonFontColor: 'black',
                  ContactButtonHoverColor: 'black',
                  ContactButtonHoverFontColor: 'white',
                  linkHoverColor: 'gray',
                  resColor: '#1A202C',
                  resFontColor: 'white',
                  condataName: 'white',
                },
        }})
       
        
       useEffect(()=>{
        if(cookies.get('darktheme')!=='on' && cookies.get('darktheme')!=='off'){
          if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            cookies.set('darktheme', 'on', { path: '/',expires: new Date(Date.now() + 3600000)});
            for(let i in dark.styles.dark){
              document.body.style.setProperty(`--${i}`, dark.styles.dark[i])    
              
            }
            setDark({...dark,isActive:true})
          }else{
            cookies.set('darktheme', 'off', { path: '/',expires: new Date(Date.now() + 3600000)});
            for(let j in dark.styles.light){
              document.body.style.setProperty(`--${j}`, String(dark.styles.light[j]))
              
            }
            setDark({...dark,isActive:false})
          }
  
        }else{
  
        if(cookies.get('darktheme')==='on'){
          
          for(let j in dark.styles.dark){
            document.body.style.setProperty(`--${j}`, String(dark.styles.dark[j]))
          
          }
          
          setDark({...dark,isActive:true})
        }else{
          
          for(let i in dark.styles.light){
            document.body.style.setProperty(`--${i}`, dark.styles.light[i])    
            
          }
          setDark({...dark,isActive:false})
        }
        }
        
       },[])
  
       function setDarkTheme(){
          
          if(dark.isActive===false){
            cookies.set('darktheme', 'on', { path: '/',expires: new Date(Date.now() + 3600000)});
            
            for(let i in dark.styles.dark){
              document.body.style.setProperty(`--${i}`, dark.styles.dark[i])    
               
            }
            setDark({...dark,isActive:true})
          }else{
            cookies.set('darktheme', 'off', { path: '/',expires: new Date(Date.now() + 3600000)});
            
            for(let j in dark.styles.light){
              document.body.style.setProperty(`--${j}`, String(dark.styles.light[j]))
            
            }
            setDark({...dark,isActive:false})
          }
          
         }
    return(
        <>
          <div id='icon' onClick={setDarkTheme}>

{cookies.get('darktheme')!=='on' && cookies.get('darktheme')!=='off' ?
<>
{dark.isActive? < FiMoon color={'white'} size={size}/> :< FiSun color={'black'} size={size}/>}  
</>:
<>
{ cookies.get('darktheme')==='on'? < FiMoon color={'white'} size={size}/> :< FiSun color={'black'} size={size}/>}  
</>
}  

</div>

        </>
    )
}