import { useState } from 'react';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import './styles.scss';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    if (username === 'teste' && password === '123456') {
      alert('Usuário logado com sucesso');
    } else {
      alert('Login/senha inválido(a)');
    }
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
