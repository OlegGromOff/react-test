import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // event для проверки действий клиента
import Search from "./Search";

const onChange = jest.fn(); // создаю фейковую функцию (fn - это функция )

describe("Search component", () => {
  // тесты для Search component
  it("renders Search component", () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    expect(screen.getByText(/find/i)).toBeInTheDocument(); // проверяю что в поиске есть текст
  });

  it("renders without children", () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByText(/search/i)).toBeInTheDocument(); // проверяю что в поиске если пусто то приходит слово по умолчанию search
  });

  it("renders without placeholder", () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument(); // проверяю что есть плейсхолдер
  });

  it("custom placeholder works correctly", () => {
    render(<Search value="" onChange={onChange} placeholder="find post" />);

    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument(); // проверяю что плейсхолдер соответствует надписи find post
  });

  it("onChange works", () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    userEvent.type(screen.getByRole("textbox"), "React"); // user печатает в текстовом поле

    expect(onChange).toHaveBeenCalledTimes(5); //функция onChange была вызвана 5 раз (столько сколько букв в слове "React")
  });

  it("dinamyc styles works", () => {
    render(<Search value="abc" onChange={onChange} />);

    expect(screen.getByRole("textbox")).toHaveClass("input"); // есть ли у текстового поля класс input
    expect(screen.getByRole("textbox")).toHaveClass("filled"); // есть ли у текстового поля класс filled
    expect(screen.getByText("Search")).toHaveClass("label"); // есть ли у текста класс label
  });

  it("Search snapshot", () => {
    const search = render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    expect(search).toMatchSnapshot();
  });
});
