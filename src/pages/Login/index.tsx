import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import { login } from '../../services/auth.service';
import './styles.scss';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    login(username, password).then(signed => {
        if (signed) {
            navigate('/home')
        } else {
            alert('Login/senha inválido(a)')
        }
    })
}

  return (
    <div className="login-page">
      <header className="page-header ">ACESSO</header>

      <main>
        <MyInput label="Login" value={username} change={setUsername} />
        <MyInput type="password" label="Senha" value={password} change={setPassword} />
        <MyButton text="Entrar" click={signIn}></MyButton>
      </main>

      <footer></footer>
    </div>
  );
}
