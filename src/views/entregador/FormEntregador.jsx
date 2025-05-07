import axios from 'axios';
import InputMask from 'comigo-tech-react-input-mask';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [CPF, setCpf] = useState();
    const [RG, setRG] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [Rua, setRua] = useState();
    const [Número, setNúmero] = useState();
    const [Bairro, setBairro] = useState();
    const [Cidade, setCidade] = useState();
    const [UF, setUF] = useState();
    const [CEP, setCEP] = useState();
    const [Complemento, setComplemento] = useState();
    const [ativo, setAtivo] = useState(true);

    axios.post("http://localhost:8080/api/Entregador", EntregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um Entregador.')
		})


    return (
        <div>
            <MenuSistema tela={'entregador'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={CPF}
                                        onChange={e => setCPF(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                    value={RG}
                                    onChange={e => setRG(e.target.value)}
                                />
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={DataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={5}
                                >
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        placeholder="Celular"
                                        value={FoneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={5}>
                                    <InputMask
                                        mask="(99) 9999-9999"
                                        placeholder="Fixo"
                                        value={FoneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    value={Rua}
                                    onChange={e => setRua(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Número'
                                    value='Número'
                                    onChange={e => setNúmero(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    value='Bairro'
                                    onChange={e => setBairro(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    value='Cidade'
                                    onChange={e => setCidade(e.target.value)}
                                />
                                
                               
                            </Form.Group>

                            <Form.Group>
                            <Form.Input
                                    fluid
                                    label='CEP'
                                    value='CEP'
                                    onChange={e => setCEP(e.target.value)}
                                />
                                
                            <Form.Input
                                    fluid
                                    label='UF'
                                    value='UF'
                                    onChange={e => setUF(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    value='Complemento'
                                    onChange={e => setComplemento(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo</label>
                                <Form.Radio 
                                    label='Sim' 
                                    checked={ativo} 
                                    onChange={e => setAtivo(true)}
                                />
                                <Form.Radio 
                                    label='Não' 
                                    checked={ativo} 
                                    onChange={e => setAtivo(false)}
                                />
                            </Form.Group>
                        </Form>
                        
                        <div style={{ marginTop: '4%' }}>

                        <Link to={'/list-entregador'}>
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

