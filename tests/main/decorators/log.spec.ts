import { Controller } from "@/presentation/protocols/controller";
import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";
import { LogControllerDecorator } from "@/main/decorators/log";
import { LogErrorRepository } from "@/data/protocols/log-error-repository";

interface SutTypes {
  sut: LogControllerDecorator;
  controllerStub: Controller;
  logErrorRepositoryStub: LogErrorRepository;
}

const makeController = (): Controller => {
  class ControllerStub implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const httpResponse: HttpResponse = {
        statusCode: 200,
        body: {
          name: "valid_name",
        },
      };

      return new Promise((resolve) => {
        resolve(httpResponse);
      });
    }
  }
  return new ControllerStub();
};

const makeLogErrorRepository = (): LogErrorRepository => {
  class LogErrorRepositoryStub implements LogErrorRepository {
    async log(stack: string): Promise<void> {
      return new Promise((resolve) => {
        resolve();
      });
    }
  }

  return new LogErrorRepositoryStub();
};

const makeSut = (): SutTypes => {
  const controllerStub = makeController();
  const logErrorRepositoryStub = makeLogErrorRepository();
  const sut = new LogControllerDecorator(
    controllerStub,
    logErrorRepositoryStub,
  );
  return {
    sut,
    controllerStub,
    logErrorRepositoryStub,
  };
};

describe("LogController Decorator", () => {
  test("Should call controller handle", async () => {
    const { sut, controllerStub } = makeSut();

    const handleSpy = jest.spyOn(controllerStub, "handle");

    const httpRequest = {
      body: {
        email: "any_mail@mail.com",
        name: "any_name",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };

    await sut.handle(httpRequest);

    expect(handleSpy).toHaveBeenCalledWith(httpRequest);
  });

  test("Should return the same result of the controller", async () => {
    const { sut } = makeSut();

    const httpRequest = {
      body: {
        email: "any_mail@mail.com",
        name: "any_name",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        name: "valid_name",
      },
    });
  });
});
