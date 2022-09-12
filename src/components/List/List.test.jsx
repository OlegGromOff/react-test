import { render, screen } from "@testing-library/react";
import List from "./List";

const data = ["html", "css", "js"];

describe("List component", () => {
  it("List renders", () => {
    // в кавычках название теста
    // можно писать test или it
    render(<List items={data} />); // отрисовываю список из массива

    expect(screen.getByRole("list")).toBeInTheDocument(); // проверяю есть ли на странице список
    expect(screen.getByText("html")).toBeInTheDocument(); // проверяю есть ли в моем списке 'html
  });

  it("List renders without data", () => {
    render(<List />); // отрисовываю пустой список (нет списка)

    expect(screen.queryByRole("list")).toBeNull(); // проверяю что на странице отсутствует список
  });

  it("List snapshot", () => {
    // snapshot(слепок) тест. Соответствует ли элемент заданному шаблону
    const list = render(<List items={data} />);

    expect(list).toMatchSnapshot(); // проверяю соответствует ли list слепку
  }); // после запуска этого теста автоматически создастся папка со снепшотами в папке List

  it("List empty snapshot", () => {
    // snapshot для пустого списка
    const list = render(<List />);

    expect(list).toMatchSnapshot();
  });
});
// describe использую для группировки тестов
