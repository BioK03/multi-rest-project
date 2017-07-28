<?php
namespace AppBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name');
        $builder->add('description');
        $builder->add('creator');
        $builder->add('email', EmailType::class);
        $builder->add('latitude', NumberType::class);
        $builder->add('longitude', NumberType::class);
        $builder->add('place');
        $builder->add('theme');
        $builder->add('color');
        $builder->add('icon');
        $builder->add('date');
        $builder->add('hour');
    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'AppBundle\Entity\Event',
            'csrf_protection' => false
        ]);
    }
}