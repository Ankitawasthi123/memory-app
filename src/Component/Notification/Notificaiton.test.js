import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import Notificaiton from "./Notificaiton";

describe("Notificaiton", () => {
  beforeEach(() => {
    render(
      <Notificaiton
        notificationProps={{ header: "ERROR", text: "Api is not working." }}
        setNotificationProps={() => {}}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("Check for notificaiton modal", () => {
    const closeBtn = screen.getByText("Close");
    fireEvent.click(closeBtn);
  });
});
