import React, { useContext } from 'react';
import Link from 'next/link';
import FirebaseContext from '../../firebase/context';
import styled from '@emotion/styled'

const Nav = styled.nav`
  padding-left: 2rem;

  a{
      font-size: 1.8rem;
      margin-left: 2rem;
      color: var(--gris2);
      font-family: var(--ptsans);

      &::last-child{
          margin-right: 0;
      }
  }
`;

const Navegacion = () => {

    const { usuario } = useContext(FirebaseContext);

    return (
        <Nav>
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            {usuario && ( <Link href="/nuevo-producto">Nuevo Producto</Link> )}
        </Nav>
     );
}

export default Navegacion;