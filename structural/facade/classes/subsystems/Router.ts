export class Router {
    addRoute(route: string) {
        console.log('\nRouter:');
        console.log(`added route: ${route}`);
    }

    intercept(request: any, response: any) {
        console.log('\nRouter:');
        console.log(request, response);
    }
}
