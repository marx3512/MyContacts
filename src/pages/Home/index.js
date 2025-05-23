import { Link } from 'react-router-dom';

import { Container, InputSearchContainer, Header, ListContainer, Card } from '../../pages/Home/styles';

import arrow from '../../assets/images/icon/arrow.svg';
import trash from '../../assets/images/icon/trash.svg';
import edit from '../../assets/images/icon/edit.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type='text' placeholder='Pesquise pelo nome'/>
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to='/new'>Novo contato</Link>
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
            <Link to='/edit/123'>
              <img src={edit} alt='Edit'/>
            </Link>
            <button type='button'>
              <img src={trash} alt='Delete'/>
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
