import { Container, Header, ListContainer, Card } from './styles';

import arrow from '../../assets/images/icon/arrow.svg';
import trash from '../../assets/images/icon/trash.svg';
import edit from '../../assets/images/icon/edit.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href='/'>Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type='button'>
            <span>Nome</span>
            <img src={arrow} alt="Arrow"/>
          </button>
        </header>
        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Mateus Silva</strong>
              <small>instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-99999</span>
          </div>

          <div className='actions'>
            <a href='/'>
              <img src={edit} alt='Edit'/>
            </a>
            <button type='button'>
              <img src={trash} alt='Delete'/>
            </button>
          </div>
        </Card>
        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Mateus Silva</strong>
              <small>instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-99999</span>
          </div>

          <div className='actions'>
            <a href='/'>
              <img src={edit} alt='Edit'/>
            </a>
            <button type='button'>
              <img src={trash} alt='Delete'/>
            </button>
          </div>
        </Card>
        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Mateus Silva</strong>
              <small>instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-99999</span>
          </div>

          <div className='actions'>
            <a href='/'>
              <img src={edit} alt='Edit'/>
            </a>
            <button type='button'>
              <img src={trash} alt='Delete'/>
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
