import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react'; // 
import MenuSistema from '../../MenuSistema';
export default function FormCadastro () {

    const [CódigodoProduto, setCódigodoProduto] = useState();
    const [Descrição, setDescrição] = useState();
    const [ValordoProduto, setValordoProduto] = useState();
    const [TempodeEntrega, setTempodeEntrega] = useState();
   
    axios.post("http://localhost:8080/api/Produto", ProdutoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um Produto.')
		})




  const salvar = () => {
    // Aqui vai a lógica real de envio do produto
    console.log("Produto salvo!");
  };

  return (
    <div>
      <MenuSistema tela={'Produto'} />
      <div style={{marginTop: '3%', padding: '20px'}}>

        <Container textAlign='justified'>
          <h2>Produto &nbsp; Cadastro </h2>
          <Divider />

          <div style={{marginTop: '4%'}}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Título'
                  maxLength="100"
                />

                <Form.Input
                  required
                  fluid
                  label='Código do Produto'
                  maxLength="100"
                  value={CódigodoProduto}
                  onChange={e => setCódigodoProduto(e.target.value)}
                />
              </Form.Group>
              
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Descrição'
                  maxLength="125"
                  value={Descrição}
                  onChange={e => setDescrição(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Valor do Produto'
                  width={6}
                  value={ValordoProduto}
                  onChange={e => setValordoProduto(e.target.value)}
                />
                <Form.Input
                  fluid
                  label='Tempo de Entrega'
                  width={6}
                  value={TempodeEntrega}
                  onChange={e => setTempodeEntrega(e.target.value)}
                />
              </Form.Group>
            </Form>
            
            <div style={{marginTop: '4%'}}>
             
            <Link to={'/list-produto'}>
              <Button
                type="button"
                inverted
                circular
                icon
                labelPosition='left'
                color='orange'
              >
                <Icon name='reply' />
                Voltar
              </Button>
              </Link>
              
              <Button
                inverted
                circular
                icon
                labelPosition='left'
                color='blue'
                floated='right'
                onClick={() => salvar()}
              >
                <Icon name='save' />
                Salvar
              </Button>
            </div>
          </div>
          
        </Container>
      </div>
    </div>
  );
}
