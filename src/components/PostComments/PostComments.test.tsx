import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from './index';

describe('Teste componente PostComment', () => {
    test('Test Componente', () => {
        const { debug } = render(<PostComment/>)
        debug()
    })
    it('Renderizar o componente corretamente', () => {
       render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });  
})

describe('Teste componente PostComment', () => {
    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-tex'), {
            target: {
                value: 'teste1 campo',
            }
        });
        fireEvent.click(screen.getByTestId('campo-btn'));

        fireEvent.change(screen.getByTestId('campo-tex'), {
            target: {
                value: 'teste2 campo',
            }
        })
        fireEvent.click(screen.getByTestId('campo-btn'));

        expect(screen.getAllByTestId('qtd-comentearios')).toHaveLength(2)
})
})