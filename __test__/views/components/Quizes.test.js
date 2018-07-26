import { shallow } from "vue-test-utils";
import { Quizes } from "../../../src/views/home/components";

describe("Quizes.test.js", () => {
  const params = {
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(Quizes, params);
    });

    it("quizes return an array", () => {
      expect(Array.isArray(wrapper.vm.quizes)).toBeTruthy();
    });
  });
});
