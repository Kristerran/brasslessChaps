import React from 'react';
// import Container from '@mui/material/Container';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
import Particles from './Particles';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Home = () => {
  return (
    <Container
      disableGutters={true}
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Particles></Particles>
      <Card
        sx={{ background: 'none', borderRadius: '0', position: 'relative' }}
      >
        <div style={{ width: '100%', background: '#e4c3e2' }}>
          <CardMedia
            sx={{
              background: '#BEBEBE80',
              maxWidth: '60vh',
              margin: 'auto',
            }}
            component="img"
            image="../images/logo.png"
            alt="Brassless Chaps Logo, Text reads Brassless Chaps A Queer Brass Band In Portland Oregon surrounded by a circle containing pride flag colors. Beneath the text is an icon of a brass horn."
          />
        </div>
        <div style={{ position: 'relative' }}>
          <div class="custom-shape-divider-top-1659224291">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <CardContent>
          <Typography
            variant="h5"
            compontnt="div"
            color="black"
            // sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Putting the ASS in BRASS with SASS
          </Typography>
          <Typography
            variant="body1"
            color="black"
            // sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Portland’s premier queer antifascist brass band.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: '#e4c3e2',
          maxWidth: '2000px',
          margin: 'auto',
          // marginRight: '5%',
          marginTop: '5%',
        }}
      >
        <CardMedia
          sx={{
            background: '#e4c3e2',
            maxWidth: '90%',
            marginLeft: 'auto',
            marginRight: '5%',
            marginTop: '5%',
          }}
          component="img"
          image="../images/portrait.jpg"
          alt="Group photo of band posing with instruments in colorful outfits"
        />
        <CardContent
          sx={{
            background: '#e4c3e2',
            maxWidth: '800px',
            margin: 'auto',
            // marginRight: '5%',
            marginTop: '5%',
          }}
        >
          <Typography variant="h6" color="black" sx={{ marginTop: '2px' }}>
            About Us
          </Typography>
          <Typography variant="body1" color="black" sx={{ marginTop: '2px' }}>
            Founded in April 2022, Brassless Chaps is an all queer brass band.
          </Typography>
          <Typography variant="body2" color="black" sx={{ marginTop: '2px' }}>
            We are a Queer community band playing out and proud in the streets
            of Portland, Oregon on the unceded lands of the Cowlitz, and
            Confederated Tribes of the Grand Ronde people.
          </Typography>
          <Typography variant="body2" color="black" sx={{ marginTop: '2px' }}>
            Through our performances we wish to promote Queer joy while
            highlighting Queer artists and themes, as well as playing
            traditional brass band standards and antifascist songs.
          </Typography>
          <Typography
            variant="body2"
            color="black"
            // sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            We use our talents to support Queer communities and other causes
            that reflect our values. We use the joy of music as an act of
            resistance to achieve queer liberation through music.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: '#e4c3e2',
          maxWidth: '800px',
          margin: 'auto',
          // marginRight: '5%',
          marginTop: '5%',
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            color="black"
            // sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Band Values
          </Typography>
          <Typography
            variant="body2"
            color="black"
            // sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            <List>
              <ListItem>
                <ListItemText>Anti-racism</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Disability rights</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Transgender rights</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Kink positivity</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
            </List>
            Anti-misogyny and anti-transmisogyny Antifascism, including
            resistance to agents of the state in the US (especially police and
            immigration agents) Consent Do not touch anyone without their
            explicit consent. Do not photograph or film anyone without their
            explicit consent. Prison abolition Bodily autonomy including
            healthcare access and access to abortions for all. Protection for
            immigrants regardless of legal status. We believe that Black Lives
            Matter, trans women are women, trans men are men, and all cops are
            bad. Horizontal leadership - everyone is encouraged to take on a
            leadership role if they wish. Take space, make space. Being aware of
            the space you’re taking and stepping back. Inviting people to take
            up more space. Embracing discomfort in the learning process.
            Creating a judgement free zone for people to learn, explore and grow
            as musicians and leaders. Making art accessible for all.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: '#e4c3e2',
          maxWidth: '800px',
          margin: 'auto',
          // marginRight: '5%',
          marginTop: '5%',
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            color="black"
            // sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Membership
          </Typography>
          <Typography
            variant="body2"
            color="black"
            // sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            There is no age requirement to be in the band* Feel aligned with the
            word “Queer” and share our values as listed in the membership
            handbook. Have a skill, whether musical, visual, or supportive, that
            they wish to include in our performances. While we call ourselves a
            “brass” band, we are open-minded about instrumentation with the main
            concerns being mobility and volume. Be willing to work with a
            diverse group of people with respect and kindness. Be willing to
            apologize and work to repair relationships when they cause harm. Be
            welcomed by the rest of the band without objections (current members
            may veto anyone they have safety concerns about and should let other
            folks in the band know as soon as possible about those concerns).
            *Anyone under the age of 18 is not permitted to be by themselves
            with any other one band member for liability reasons.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="https://www.meetup.com/brasslesschaps/" size="small">
            Join us on meetup!
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Home;
