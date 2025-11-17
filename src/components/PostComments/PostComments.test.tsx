import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        // Selecionar elementos usando data-testid
        const textarea = screen.getByTestId('comment-textarea');
        const submitButton = screen.getByTestId('submit-button');

        // Adicionar primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário de teste' } });
        fireEvent.click(submitButton);

        // Verificar se o primeiro comentário foi adicionado
        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();

        // Adicionar segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário de teste' } });
        fireEvent.click(submitButton);

        // Verificar se o segundo comentário foi adicionado
        expect(screen.getByText('Segundo comentário de teste')).toBeInTheDocument();

        // Verificar se ambos os comentários estão presentes
        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário de teste')).toBeInTheDocument();
    });
});