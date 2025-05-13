import React from "react";
import { render, screen, act } from "@testing-library/react";
import Marquee from "../Marquee";

jest.useFakeTimers();

describe("Marquee Component", () => {
  it("renders the countdown message when an upcoming message exists", () => {
    // Mock the current date to be before the startDateTime of the message
    jest.setSystemTime(new Date("2025-04-20T12:00:00-04:00"));

    render(<Marquee />);

    // Fast-forward timers to trigger the countdown calculation
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Assert the countdown message
    expect(screen.getByText(/Registration for our/)).toBeInTheDocument();
    expect(screen.getByText(/22d 7h 59m 59s/)).toBeInTheDocument(); // Countdown format
  });

  it("renders the active message when the current time is within the active period", () => {
    // Mock the current date to be within the active period of the message
    jest.setSystemTime(new Date("2025-05-13T12:00:00-04:00"));

    render(<Marquee />);

    // Assert the active message
    expect(screen.getByText(/SOLD OUT/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /SOLD OUT/ })).toHaveAttribute(
      "href",
      "https://docs.google.com/forms/d/1iCE8mVu5JT0J_zhHIPYCxE-xsmDMj_ma9wvw5KZ9pOQ/edit"
    );
  });

  it("rotates descriptors every 3 seconds", () => {
    // Mock the current date to be before the startDateTime of the message
    jest.setSystemTime(new Date("2025-05-01T12:00:00-04:00"));

    render(<Marquee />);

    // Check the initial descriptor
    expect(screen.getByText(/fourth Throw Down tournament/)).toBeInTheDocument();

    // Fast-forward timers by 3 seconds to trigger descriptor rotation
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText(/largest ever draft tournament/)).toBeInTheDocument();

    // Fast-forward timers by another 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText(/16 team 6v6 foam tournament/)).toBeInTheDocument();
  });

  it("renders nothing when no messages are active or upcoming", () => {
    // Mock the current date to be after the endDateTime of the message
    jest.setSystemTime(new Date("2025-06-01T12:00:00-04:00"));

    render(<Marquee />);

    // Assert no messages are displayed
    expect(screen.queryByText(/Registration for our/)).not.toBeInTheDocument();
    expect(screen.queryByText(/SOLD OUT/)).not.toBeInTheDocument();
  });
});