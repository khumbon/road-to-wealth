import Image from 'next/image'
import Logo from '../public/assets/blog/images/Logo.png'
import Name from '../public/assets/blog/images/Name.png'
import Slogan from '../public/assets/blog/images/Slogan.png'
import Road from '../public/assets/blog/images/Road.png'
import Grid from '@mui/material/Grid';

const Intro = () => {
  
  //** <div style={{width: '1920px', height: '1000px', backgroundImage: 'url(/assets/blog/images/Banner2.png)', backgroundRepeat: 'no-repeat', clip:'rect(350px,1920px,952px,0px)', position:'absolute'}}/>  */
  console.log(Name)
  console.log(Slogan)
  return (
    <div style={{ background: '#16576a' }}>
      <Grid container spacing={2}>
      <Grid item xs={8}>
          <Image src={Name.src} width={Name.width} height={Name.height} style={{ paddingLeft:'200px' }} />
        </Grid>
        <Grid item xs={4} style={{ alignContent: 'bottom'}}>
        <Image src={Road.src} width={Road.width} height={Road.height} />
        </Grid>

      <div style={{alignContent: 'center'}}>
  <Image src={Slogan.src} width='732.66' height='45' style={{ paddingLeft:'250px' }} />
      </div>
      </Grid>
    </div>
  )
}

export default Intro
/**<div style={{position: 'relative', width: '100%', height: 0, paddingTop: '60.0000%',
paddingBottom: '48px', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
borderRadius: '8px', willChange: 'transform'}}>
<iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0,}}
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEpUj2ziOA&#x2F;view?embed"  allow="fullscreen">
  </iframe>
</div>*/