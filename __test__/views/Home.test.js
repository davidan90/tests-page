import { shallow } from "vue-test-utils";
import Home from "../../src/views/home/Home";

describe("Home.test.js", () => {
  const params = {
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(Home, params);
    });

    it("show two containers in the section#home", () => {
      expect(wrapper.findAll("section#home .container").length).toBe(2);
    });
  });
});
