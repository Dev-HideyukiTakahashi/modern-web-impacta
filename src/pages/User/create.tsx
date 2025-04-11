import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import './styles.scss';
import { useState } from 'react';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function save() {
    if (name === null || name.length < 1) {
      alert('Nome é obrigatório!');
      return;
    }

    if (username === null || username.length < 1) {
      alert('Login é obrigatório!');
      return;
    }

    if (password === null || password.length < 1) {
      alert('Senha é obrigatório!');
      return;
    }

    if (password !== confirmPass) {
      alert('Senha inválida!');
      return;
    }
    console.log(`Usuário ${name} criado com sucesso!`);
  }

  return (
    <div className="create-user-page">
      <header className="page-header">CADASTRO</header>

      <main>
        <div className="input-container">
          <MyInput label="Nome" value={name} change={setName} />
          <MyInput label="Login" value={username} change={setUsername} />
          <MyInput type="password" label="Senha" value={password} change={setPassword} />
          <MyInput
            type="password"
            label="Confirmar senha"
            value={confirmPass}
            change={setConfirmPass}
          />
        </div>
        <MyButton text="Cadastrar" click={save}></MyButton>
      </main>

      <footer></footer>
    </div>
  );
}
