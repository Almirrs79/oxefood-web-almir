import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListProduto () {

   const [lista, setLista] = useState([]);

   useEffect(() => {
	   carregarLista();
   }, [])

   function carregarLista() {

	   axios.get("http://localhost:8080/api/produto")
	   .then((response) => {
		   setLista(response.data)
	   })
   }
   function formatarData(dataParam) {

	if (dataParam === null || dataParam === '' || dataParam === undefined) {
		return ''
	}

	let arrayData = dataParam.split('-');
	return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
}
return(
	<div>
		<MenuSistema tela={'Produto'} />
		<div style={{marginTop: '3%'}}>

			<Container textAlign='justified' >

				<h2> Produto </h2>
				<Divider />

				<div style={{marginTop: '4%'}}>
					<Button
						label='Novo'
						circular
						color='orange'
						icon='clipboard outline'
						floated='right'
						as={Link}
						to='/form-Produto'
					/>
 <br/><br/><br/>
				  
				  <Table color='orange' sortable celled>

					  <Table.Header>
						  <Table.Row>
							  <Table.HeaderCell>Código do Produto</Table.HeaderCell>
							  <Table.HeaderCell>Descrição</Table.HeaderCell>
							  <Table.HeaderCell>Valor do Produto</Table.HeaderCell>
							  <Table.HeaderCell>Tempo de Entregar</Table.HeaderCell>
							  <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
						  </Table.Row>
					  </Table.Header>
				 
					  <Table.Body>

						  { lista.map(Produto => (

							  <Table.Row key={Produto.id}>
								  <Table.Cell>{Produto.nome}</Table.Cell>
								  <Table.Cell>{Produto.tempo}</Table.Cell>
								  <Table.Cell>{Produto.ação}</Table.Cell>
								  <Table.Cell textAlign='center'>

									  <Button
										  inverted
										  circular
										  color='green'
										  title='Clique aqui para editar os dados deste produto'
										  icon>
											   <Icon name='edit' />
									  </Button> &nbsp;
									  <Button
											   inverted
											   circular
											   color='red'
											   title='Clique aqui para remover este produto'
											   icon>
												   <Icon name='trash' />
										   </Button>

									   </Table.Cell>
								   </Table.Row>
							   ))}

						   </Table.Body>
					   </Table>
				   </div>
			   </Container>
		   </div>

	   </div>
   )
}
