import { render, screen } from "@testing-library/react";
import ImageMessage from "./imageMessage";

const message = {
  src: "image.jpg",
  message: "image message",
  createAt: new Date("2024-07-17T21:08:30.").toISOString()
}

describe("ImageMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(<ImageMessage message={message} />);
    expect(container).toMatchSnapshot();
  });
})