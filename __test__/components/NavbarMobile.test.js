import { shallow } from "vue-test-utils";
import { NavbarMobile } from "../../src/components";

describe("NavbarMobile.test.js", () => {
  const params = {
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(NavbarMobile, params);
    });

    it("display none if isMenuShow = false", () => {
      expect(wrapper.contains("#navbar-mobile.active")).toBeFalsy();
    });

    it("hide close span if menuShow = false", () => {
      wrapper.setData({ menuShow: false });
      expect(wrapper.contains("#navbar-mobile span.close")).toBeFalsy();
    });

    it("toogleMenu executed when click span.title", () => {
      const stub = jest.fn();
      wrapper.setMethods({ toogleMenu: stub });
      wrapper.find("#navbar-mobile span.title").trigger("click");
      expect(stub).toHaveBeenCalled();
    });

    it("toogleMenu set menuShow to !menuShow", () => {
      wrapper.vm.toogleMenu();
      expect(wrapper.vm.menuShow).toBe(true);
    });
  });
});
