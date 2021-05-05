import { render, screen } from '@testing-library/react';
import Activity from './Activity';

test('renders Activity', async () => {

    const activity = {
        title: 'title',
        img: 'url',
        location: 'location'
    }

    render(<Activity
        activity={activity}
        style="square"
        />);

    const title = screen.getByText('title');
    const location = screen.getByText('location');
    const img = screen.getAllByRole('img')[0];
    
    expect(title).toBeTruthy();
    expect(location).toBeTruthy();
    expect(img).toHaveAttribute('src', 'url');
 });

 test('renders Activity with square style', async () => {

    const activity = {
        title: 'title',
        img: 'url',
        location: 'location'
    }

    const { container } = 
        render(<Activity
            activity={activity}
            style="square"
            />);

    expect(container.firstChild).toHaveClass('item square');
 });
 test('renders Activity with rectangle style', async () => {

    const activity = {
        title: 'title',
        img: 'url',
        location: 'location'
    }

    const { container } = 
        render(<Activity
            activity={activity}
            style="rectangle"
            />);

    expect(container.firstChild).toHaveClass('item rectangle');
 });
