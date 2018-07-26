import { shallow } from "vue-test-utils";
import Contact from "../../src/views/contact/Contact";

describe("Contact.test.js", () => {
  const params = {
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(Contact, params);
    });

    it("show one container in the section#contact", () => {
      expect(wrapper.contains("section#contact .container")).toBeTruthy();
    });
  });
});
