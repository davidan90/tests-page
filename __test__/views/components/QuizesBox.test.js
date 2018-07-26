import { shallow } from "vue-test-utils";
import i18n from "../../../src/i18n";
import { QuizBox } from "../../../src/views/home/components";

describe("QuizesBox.test.js", () => {
  const params = {
    i18n,
    mocks: {
      $t: key => key
    }
  };

  const quizMock = {
    className: "verbal",
    tests: [
      {
        id: "v1",
        title: "Test v 1"
      }
    ]
  };

  describe("Unit", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(QuizBox, params);
    });

    it("no render if prop quiz is undefined", () => {
      expect(wrapper.is(".quiz-box")).toBeFalsy();
    });

    it("render div.quiz-box if prop quiz is defined", () => {
      wrapper.setProps({ quiz: quizMock });
      expect(wrapper.is("div.quiz-box")).toBeTruthy();
    });

    it("toogleContainer call if click in div.tests-title", () => {
      const stub = jest.fn();
      wrapper.setProps({ quiz: quizMock });
      wrapper.setMethods({ toogleContainer: stub });
      wrapper.find("div.tests-title").trigger("click");
      expect(stub).toHaveBeenCalled();
    });

    it("toogleContainer set isContainerShow to !isContainerShow", () => {
      wrapper.setProps({ quiz: quizMock });
      wrapper.vm.toogleContainer();
      expect(wrapper.vm.isContainerShow).toBe(true);
    });
  });
});
