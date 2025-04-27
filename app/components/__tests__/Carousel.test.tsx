import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Carousel from "../Carousel";

jest.useFakeTimers();

describe("Carousel Component", () => {
  const items = [
    { description: "Item 1", image: "/image1.jpg" },
    { description: "Item 2", image: "/image2.jpg" },
    { description: "Item 3", image: "/image3.jpg" },
  ];

  it("renders the first item by default", () => {
    render(<Carousel items={items} />);

    expect(screen.getByAltText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("navigates to the next item when the 'Next' button is clicked", () => {
    render(<Carousel items={items} />);

    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByAltText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("navigates to the previous item when the 'Previous' button is clicked", () => {
    render(<Carousel items={items} />);

    fireEvent.click(screen.getByText("Previous"));

    expect(screen.getByAltText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("loops back to the first item after the last item when 'Next' is clicked", () => {
    render(<Carousel items={items} />);

    fireEvent.click(screen.getByText("Next"));
    fireEvent.click(screen.getByText("Next"));
    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByAltText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("loops back to the last item when 'Previous' is clicked on the first item", () => {
    render(<Carousel items={items} />);

    fireEvent.click(screen.getByText("Previous"));

    expect(screen.getByAltText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("automatically navigates to the next item every 5 seconds", () => {
    render(<Carousel items={items} />);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByAltText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByAltText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("stops the automatic navigation when the component is unmounted", () => {
    const { unmount } = render(<Carousel items={items} />);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByAltText("Item 2")).toBeInTheDocument();

    unmount();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Since the component is unmounted, no further navigation should occur
    expect(screen.queryByAltText("Item 3")).not.toBeInTheDocument();
  });
});