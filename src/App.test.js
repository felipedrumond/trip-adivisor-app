import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const carousel = 
  [
    {
        title: "Kakadu National Park",
        img: "https://placeimg.com/240/240/nature",
        location: "Jabiru NT"
    },
    {
        title: "Uluru-Kata Tjuta National Park",
        img: "https://placeimg.com/640/480/nature",
        location: "Uluru NT"
    }
  ];

const featured =
  [
    {
        "title": "Canberra National Park",
        "img": "https://picsum.photos/800/2700",
        "location": "Canberra ACT"
    },
    {
        "title": "Royal National Park",
        "img": "https://picsum.photos/400/400",
        "location": "Royal National Park NSW"
    }
  ];

const server = setupServer(
  rest.get('/json/carousel.json', (req, res, ctx) => {
    return res(ctx.json({ data: carousel }))
  }),

  rest.get('/json/featured.json', (req, res, ctx) => {
    return res(ctx.json({ data: featured }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders App', async () => {
  render(<App />);

  const input = screen.getByTestId('input');
  expect(input).toBeTruthy();
 });

 test('fetch and renders carousel data', async () => {
  render(<App />);

  await waitFor(() => screen.getByText(carousel[0].title));

  carousel.map((activity, i) => {
    const title = screen.getByText(activity.title);
    const location = screen.getByText(activity.location);

    expect(title).toBeTruthy();
    expect(location).toBeTruthy();
  });

 });

 test('fetch and renders featured data', async () => {
  render(<App />);

  await waitFor(() => screen.getByText(featured[0].title));

  featured.map((activity, i) => {
    const title = screen.getByText(activity.title);
    const location = screen.getByText(activity.location);

    expect(title).toBeTruthy();
    expect(location).toBeTruthy();
  });

 });

 test('filter activities by inputed value', async () => {
  render(<App />);

  await waitFor(() => screen.getByText(featured[0].title));

  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: featured[0].title } })

  const title = screen.getByText(featured[0].title);
  const location = screen.getByText(featured[0].location);

  expect(title).toBeTruthy();
  expect(location).toBeTruthy();
 });

 test('do not filter activities when inputed value is empty', async () => {
  render(<App />);

  await waitFor(() => screen.getByText(featured[0].title));

  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: ' ' } })

  featured.map((activity, i) => {
    const title = screen.getByText(activity.title);
    const location = screen.getByText(activity.location);

    expect(title).toBeTruthy();
    expect(location).toBeTruthy();
  });
 });