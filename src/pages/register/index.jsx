import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../components/Header'
import { Container, Column, Title, SubtitleRegister, Wrapper, Text, JaTenhoConta, Row, FazerLogin, ErrorText } from './style'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

const schema = yup.object({
    name: yup.string().required('Campo obrigatóro!'),
    email: yup.string().email('email não é válido!').required('Campo obrigatóro!'),
    senha: yup.string().min(3, 'No mínimo 3 caracteres!').required('Campo obrigatóro!'),
}).required();


const Register = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            console.log(formData)
            await api.post('/users', {
                name: formData.name,
                email: formData.email,
                senha: formData.senha
            })
            alert("Conta criada com sucesso!")
            return
        }catch(e){
            alert("Houve um erro!")
        }
    };


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <Title>
                        Comece agora grátis
                    </Title>
                    <SubtitleRegister>
                        Crie sua conta e make the change._
                    </SubtitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="name" leftIcon={<FaUser />} name="name"  control={control} />
                        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                        {errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Text>         
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de 
                        Privacidade e os Termos de Uso da DIO.
                    </Text>
                    <Row>
                        <JaTenhoConta>
                            Já tenho conta.
                        </JaTenhoConta>   
                        <FazerLogin href='./login'>
                            Fazer login
                        </FazerLogin>   
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export { Register }