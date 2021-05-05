import { render, screen } from '@testing-library/react';
import Popular from './Popular';

test('renders Popular', async () => {

    const activity1 = {
        title: 'title 1',
        img: 'url 1',
        location: 'location 1'
    };
    const activity2 = {
        title: 'title 2',
        img: 'url 2',
        location: 'location 2'
    };

    const activities = [activity1, activity2];

    render(<Popular
        activities={activities}
        />);

    activities.map((activity, i) => {
        const title = screen.getByText(activity.title);
        const location = screen.getByText(activity.location);
    
        expect(title).toBeTruthy();
        expect(location).toBeTruthy();
    });
 });
