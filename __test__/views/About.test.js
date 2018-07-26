import { shallow } from "vue-test-utils";
import About from "../../src/views/about/About";

describe("About.test.js", () => {
  const params = {
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(About, params);
    });

    it("show one container in the section#about", () => {
      expect(wrapper.contains("section#about .container")).toBeTruthy();
    });
  });
});
