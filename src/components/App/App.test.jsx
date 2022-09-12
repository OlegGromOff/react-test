import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import userEventevent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
  it("App renders", () => {
    render(<App />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Find course:")).toBeInTheDocument();
  });

  it("typing in Searchbox works", () => {
    render(<App />);

    // используй query а не get чтобы проверить что что-то отсутствует
    expect(screen.queryByDisplayValue(/React/)).toBeNull(); // проверяю что в текстовом поле нет текста React

    userEvent.type(screen.getByRole("textbox"), "React"); // юзер печатает в текстовом поле слово React

    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument(); // есть ли на экране слово React
  });

  it("search filter is working", () => {
    render(<App />);

    expect(screen.getByText(/CSS/)).toBeInTheDocument(); // проверяю есть ли на странице текст Vue
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument(); // проверяю есть ли на странице текст JavaScript

    userEvent.type(screen.getByRole("textbox"), "script"); // юзер печатает в текстовом поле слово script  });

    expect(screen.queryByText(/CSS/)).toBeNull(); // проверяю что на странице нет CSS
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument(); // проверяю что на странице есть JavaScript
  });
});
