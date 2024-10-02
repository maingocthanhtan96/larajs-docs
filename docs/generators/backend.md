## Form Request

```php
<?php

namespace App\Http\Requests\V1;

class StoreCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // validation
        ];
    }
}
```

## Controller

```php
<?php

namespace App\Http\Controllers\Api\V1;

class CategoryController extends Controller implements HasMiddleware
{
    public function __construct(private readonly CategoryService $categoryService) {}

    public static function middleware(): array
    {
        // Middleware instance is used to enforce specific permissions on different actions
    }

	public function index(Request $request): JsonResponse
	{
        // Find all
	}

	public function store(StoreCategoryRequest $request): JsonResponse
	{
        // Create
	}

	public function show(int $id, Request $request): JsonResponse
	{
        // Find One
	}

    public function update(int $id, StoreCategoryRequest $request): JsonResponse
	{
        // Update
	}

    public function destroy(int $id): JsonResponse
    {
        // Delete
    }
}
```

## Service

```php
<?php

namespace App\Services\V1\Category;

readonly class CategoryService
{
    /**
     * @param  CategoryRepositoryInterface<Category>  $categoryRepository
     */
    public function __construct(private CategoryRepositoryInterface $categoryRepository) {}

    public function findAll(Request $request): LengthAwarePaginator|CursorPaginator|Paginator|Collection
    {
        // Find All
    }

    public function create(array $data): Category
    {
        // Create
    }

    public function find(int $id, Request $request): Category
    {
        // Find One
    }

    public function update(int $id, array $data): Category
    {
        // Update
    }

    public function delete(int $id): bool
    {
        // Delete
    }
}
```

## Repository

**CategoryRepository.php**

```php
<?php

namespace App\Repositories\Category;

/**
 * @template T of Category
 *
 * @implements CategoryRepositoryInterface<T>
 *
 * @extends  BaseRepository<T>
 */
class CategoryRepository extends BaseRepository implements CategoryRepositoryInterface
{
    public function getModel(): string
    {
        return Category::class;
    }
}
```

**CategoryRepositoryInterface.php**

```php
<?php

namespace App\Repositories\Category;

/**
 * @template T
 *
 * @extends BaseRepositoryInterface<T>
 */
interface CategoryRepositoryInterface extends BaseRepositoryInterface {}
```

## Api Document

We leverage [Laravel Scribe](https://scribe.knuckles.wtf/laravel/) to automatically generate API documentation.

```php
php artisan scribe:generate
```

**{url}/docs**

<center>
    <img src="../assets/generators/api-docs.png" alt="Api Document" />
</center>

## Eloquent Resource

```php
<?php

namespace App\Http\Resources\V1;

class CategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }
}
```

## Model

```php
<?php

namespace App\Models;

class Category extends Model
{
	use HasFactory;
	use UserSignature; // Checked `User Signature`
    use SoftDeletes; // Checked `Soft Deletes`

    protected $table = 'categories';
    protected $fillable = [
    	// columns in table
    ];
}
```

## Database

### Factory

```php
<?php

namespace Database\Factories;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition(): array
    {
        return [
            // faker
        ];
    }
}
```

### Migration

```php
<?php

return new class extends Migration
{
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
			$table->bigIncrements("id");
            // columns
        });
    }

    public function down()
    {
        Schema::dropIfExists('categories');
    }
};

```

### Seed

```php
<?php

namespace Database\Seeders;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::factory()->count(10)->create();
    }
}
```

## Language

By default, we generate language configurations for en (English), ja (Japanese), and vi (Vietnamese). These language files enable localized routes and table labels, ensuring that users from different regions can interact with the system in their preferred language.

```php
// Publish generator.php
php artisan vendor:publish --tag=larajs-core-config

'lang' => [
    'en' => [
        'route' => '',
        'table' => '',
    ],
    'ja' => [
        'route' => '',
        'table' => '',
    ],
    'vi' => [
        'route' => '',
        'table' => '',
    ],
    // Add more language in here
],
```

**Generate Vue I18n**

```php
// Synchronize i18n language settings for the frontend.
php artisan vue-i18n:generate
// packages/common/src/lang/vue-i18n-locales.generated.json
```

**Structure**

```tree
.
├── en
│   ├── route.php
│   ├── table.php
│   └── ...
├── ja
│   ├── route.php
│   ├── table.php
│   └── ...
└── vi
    ├── route.php
    ├── table.php
    └── ...
```

## Route

**api-v1.php**

```php
<?php

Route::group(['middleware' => 'auth:sanctum'], function () {
    ...
    Route::apiResource('categories', CategoryController::class);
});

```

## Tests

When the `Test Cases` option is checked, we automatically generate integration tests to ensure the API functions correctly.

```php
<?php

uses(WithFaker::class);

beforeEach(function () {
    $faker = $this->faker;
    $this->data = [
        // faker
    ];
});

test('get list categories -> 200', function () {
    Category::factory()->count(5)->create();
    // Call Api
    // Expect
});

test('show a category -> 200', function () {
    $category = Category::factory()->create();
    // Call Api
    // Expect
});

test('store a category -> 201', function () {
    // Call Api
    // Expect
});

test('update a category -> 200', function () {
    $category = Category::factory()->create();
    // Call Api
    // Expect
});

test('destroy a category -> 200', function () {
    $category = Category::factory()->create();
    // Call Api
    // Expect
});
```
