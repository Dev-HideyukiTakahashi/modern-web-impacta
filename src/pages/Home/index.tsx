import { useEffect, useState } from 'react';
import { getUsers } from '../../services/user.service';
import './styles.scss';

export default function HomePage() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then(users => {
      setUserList(users);
    });
  }, []);

  return (
    <div>
      <header className="page-header">LISTA DE USUÁRIOS</header>

      <main>
        {userList.length > 0 ? (
          <ul>
            {userList.map((user: any) => (
              <li key={user.id}>
                {user.name} ({user.username})
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </main>

      <footer className="page-footer">Temos {userList.length} usuários cadastrados.</footer>
    </div>
  );
}
