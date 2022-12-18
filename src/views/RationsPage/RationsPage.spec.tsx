import { shallow } from "enzyme";
import RationsPage from "./RationsPage";

describe("Rations Page", () => {
  it("Check number of rations", () => {
    const wrapper = shallow(<RationsPage />);

    const rationsComponents = wrapper.find("Ration");
    expect(rationsComponents.length === 3).toBeTruthy();
  });
});
