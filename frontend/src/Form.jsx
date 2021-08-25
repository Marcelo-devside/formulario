import React, {useState} from 'react'
import { userSchema } from './Validar'
import {Formik, Form} from 'formik'
import { TextField } from './TextField'
import axios from 'axios'

import './Header.css'
import './Form.css'

export default function Former(){
    const addPerson = async (person) =>{
        const user = await axios.post('http://localhost:3000',Formik)
        if (user.status === 200) {
            alert('Enviado com sucesso!')
        } else {
            alert('Erro não enviado!')
        }
        console.log(person)
    }
                                const [formValues, setFormVelues] = useState({})
                                const handleInputChange = (e) => {
                                    const {name, value} = e.target
                                    setFormVelues({...formValues, [name]: value})
                                }
                                const handleSubmit = (e) => {
                                    e.preventDefault()
                                    const formData = new FormData(e.target)
                                    const data = Object.fromEntries(formData)
                                   console.log(data)
                                    // const person = data
                                    // return person
                                }
                                function onBlurCep(e) {
                                    const {value} = e.target;
                                    const cep = value.replace(/[^0-9]/g, '')
                                    if(cep?.length !== 8){
                                        return;
                                    }
                                     fetch(`https://viacep.com.br/ws/${cep}/json/`)
                                    .then((res) => res.json())
                                    .then((data)=>{
                                        setFormVelues({...formValues, endereco: data.logradouro,
                                            bairro: data.bairro,
                                            cidade: data.localidade,
                                            uf: data.uf,
                                        })
                                    })

                                }
        return (
        
                <div className='alignment'>
                                        <section className='context'>
                                             <h1>DESAFIO GAMA ACADEMY</h1>
                                             <p>
                                                 Esta aplicação full stack é para fins acadêmicos, sobre tudo, para conclusão do curso ministrado pela Gama Academy. 
                                             </p>
                                             <p>
                                             O desenvolvimento desta aplicação foi eleborado com algumas das ferramentas e linguagens mais utilizadas do mercado de tecnologia na época em que foi concebida. 
                                             </p>
                                             <p>
                                                 O objetivo do desafio foi elaborar um formulário de cadastro de currículos afim de serem armazenados em um banco de dados além de conter algumas regras de negócios como validações e integrações com API's.
                                             </p>               
                                     </section>
                    <Formik 
                    validationSchema={userSchema}
                    initialValues={{
                       cpf: '',
                       identidade: '', 
                       nome: '', 
                       profissao: '',
                       PossuiVeiculo: '',
                       habilitacao: '',
                       CargoPretendido: '',
                       birthday: '',
                       EstadoCivil: '',
                       sexo: '',
                       cep: '',
                       endereco: '',
                       complemento: '',
                       bairro: '',
                       cidade: '',
                       uf: '',
                       telefone: '',
                       celular: '',
                       email: '',
                    }}
                    >
                    {({errors})=> (
                        <Form onSubmit={handleSubmit}>
                            <section className='style-upform'>
                            <h3>FORMULÁRIO DE CANDIDATURA</h3>
                            <div className='fields'>
                                    <div className='style-label2'>
                                        <label htmlFor="input-cpf">
                                            CPF
                                        </label>
                                    </div>
                                        <TextField type="text" name='cpf' id='input-cpf'
                                        maxLength={11} onChange={handleInputChange} value={formValues.cpf || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-identidade">
                                            IDENTIDADE
                                        </label>
                                    </div>
                                        <TextField type="text" name='identidade' id='input-identidade'
                                        maxLength={9} onChange={handleInputChange} value={formValues.identidade || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-nome">
                                            NOME {errors.cpf && ( <>{errors.cpf}</>)}
                                        </label>
                                    </div>
                                        <TextField type="text" name='nome' id='input-nome' maxLength={37} onChange={handleInputChange} value={formValues.nome || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-profissao">
                                            PROFISSÃO
                                        </label>
                                    </div>
                                        <TextField type="text" name='profissao' id='input-profissao' onChange={handleInputChange} value={formValues.profissao || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-veiculo">
                                            POSSUI VEÍCULO
                                        </label>
                                    </div>
                                            <select name="PossuiVeiculo" id="input-veiculo" 
                                            onChange={handleInputChange} value={formValues.PossuiVeiculo || ''}>
                                                <option value="">Selecionar</option>
                                                <option value="nao">Não</option>
                                                <option value="sim">Sim</option>
                                            </select>
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-habilitacao">
                                            POSSUI HABILITAÇÃO
                                        </label>
                                    </div>
                                    <select name="habilitacao" id="input-habilitacao" 
                                    onChange={handleInputChange} value={formValues.habilitacao || ''}>
                                        <option value="">Selecionar</option>
                                        <option value="nao">Não</option>
                                        <option value="sim">Sim</option>
                                    </select>
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-cargo">
                                            CARGO PRETENDIDO
                                        </label>
                                    </div>
                                        <TextField type="text" name='CargoPretendido' id='input-cargo' onChange={handleInputChange} value={formValues.CargoPretendido || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-nascimento">
                                            DATA DE NASCIMENTO
                                        </label>
                                    </div>
                                        <TextField type="date" name='birthday' id='input-nascimento' placeholder='ex: 15/08/2011' onChange={handleInputChange} value={formValues.birthday || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-civil">
                                            ESTADO CIVIL
                                        </label>
                                    </div>
                                    <select name="EstadoCivil" id="input-civil" 
                                    onChange={handleInputChange} value={formValues.EstadoCivil || ''}>
                                        <option value="">Selecionar</option>
                                        <option value="solteiro">Solteiro(a)</option>
                                        <option value="casado">Casado(a)</option>
                                        <option value="divorciado">Divorciado(a)</option>
                                    </select>
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-sexo">
                                            SEXO
                                        </label>
                                    </div>
                                    <select name="sexo" id="input-sexo"
                                    onChange={handleInputChange} value={formValues.sexo || ''}>
                                        <option value="">Selecionar</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="femenino">Feminino</option>
                                        <option value="outro gênero">Outro gênero</option>
                                        <option value="optou nao declarar">Não declarar</option>
                                    </select>
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-cep">
                                            CEP
                                        </label>
                                    </div>
                                        <TextField type="text" name='cep' id='input-cep' maxLength={8} onBlur={onBlurCep} onChange={handleInputChange} value={formValues.cep || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-endereco">
                                            ENDEREÇO
                                        </label>
                                    </div>
                                        <TextField type="text" name='endereco' id='input-endereco' placeholder='ex: Nome da Rua, 56' onChange={handleInputChange} value={formValues.endereco || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-complemento">
                                            COMPLEMENTO
                                        </label>
                                    </div>
                                        <TextField type="text" name='complemento' id='input-complemento' placeholder='ex: Bloco 2, AP 301' onChange={handleInputChange} value={formValues.complemento || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-bairro">
                                            BAIRRO
                                        </label>
                                    </div>
                                        <TextField type="text" name='bairro' id='input-bairro' onChange={handleInputChange} value={formValues.bairro || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-cidade">
                                            CIDADE
                                        </label>
                                    </div>
                                        <TextField type="text" name='cidade' id='input-cidade' onChange={handleInputChange} value={formValues.cidade || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-uf">
                                            UF
                                        </label>
                                    </div>
                                        <TextField type="text" name='uf' id='input-uf' onChange={handleInputChange} value={formValues.uf || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-telefone">
                                            TELEFONE FIXO
                                        </label>
                                    </div>
                                        <TextField type="text" name='telefone' id='input-telefone' placeholder='ex: (11) 1234-1829' onChange={handleInputChange} value={formValues.telefone || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-celular">
                                            CELULAR
                                        </label>
                                    </div>
                                        <TextField type="text" name='celular' id='input-celular' placeholder='ex: (11) 99345-1829' onChange={handleInputChange} value={formValues.celular || ''} />
                                </div>
                                <div className='fields'>
                                    <div className='style-label'>
                                        <label htmlFor="input-url">
                                            E-MAIL
                                        </label>
                                    </div>
                                        <TextField type="email" name='email' id='input-url' placeholder='ex: myname@example.com' onChange={handleInputChange} value={formValues.email || ''} />
                                </div>
                            <button id='styleButton' type="submit" onClick = {() =>addPerson()}>ENVIAR</button>
                        </section>
                        </Form>
                    )}
                    </Formik>
            </div>
        )
}  